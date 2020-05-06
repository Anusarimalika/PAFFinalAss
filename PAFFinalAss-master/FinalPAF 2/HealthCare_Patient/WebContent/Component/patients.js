$(document).ready(function() {
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

// SAVE ============================================
$(document).on("click", "#btnSave", function(event) {

	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

	// Form validation-------------------
	var status = validatePatientForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}

	var type = ($("#hidPatientIDSave").val() == "") ? "POST" : "PUT";

	$.ajax({
		url : "PatientAPI",
		type : type,
		data : $("#PatientForm").serialize(),
		dataType : "text",
		complete : function(response, status) {
			console.log(response)
			onPatientSaveComplete(response.responseText, status);
		}
	});
});

function onPatientSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divPatientGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	$("#hidPatientIDSave").val("");
	$("#PatientForm")[0].reset();
}

//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
		{
			$("#hidPatientIDSave").val($(this).closest("tr").find('td:eq(0)').text());
			$("#firstName").val($(this).closest("tr").find('td:eq(1)').text());
			$("#lastName").val($(this).closest("tr").find('td:eq(2)').text());
			$("#nic").val($(this).closest("tr").find('td:eq(3)').text());
			$("#address").val($(this).closest("tr").find('td:eq(4)').text());
			$("#gender").val($(this).closest("tr").find('td:eq(5)').text());
			$("#email").val($(this).closest("tr").find('td:eq(6)').text());
			$("#age").val($(this).closest("tr").find('td:eq(7)').text());
			$("#phone").val($(this).closest("tr").find('td:eq(8)').text());
			$("#admitted").val($(this).closest("tr").find('td:eq(8)').text());

		});



		//Remove
	$(document).on("click", ".btnRemove", function(event)
			{
			 	$.ajax(
			{
				url : "PatientAPI",
				type : "DELETE",
				data : "patientId=" + $(this).val(),
				dataType : "text",
				complete : function(response, status)
				{
					onPatientDeleteComplete(response.responseText, status);
				}
			 });
			});

	
		function onPatientDeleteComplete(response, status)
		{
			if (status == "success")
		{
				var resultSet = JSON.parse(response);
				if (resultSet.status.trim() == "success")
		{
				$("#alertSuccess").text("Successfully deleted.");
				$("#alertSuccess").show();
				$("#divDoctorGrid").html(resultSet.data);
		} 
		else if (resultSet.status.trim() == "error")
		{
				$("#alertError").text(resultSet.data);
				$("#alertError").show();
		}
		}
		else if (status == "error")
		{
			$("#alertError").text("Error while deleting.");
			$("#alertError").show();
		} 
		else
		{
			$("#alertError").text("Unknown error while deleting..");
			$("#alertError").show();
		}
}
		// CLIENT-MODEL================================================================
		function validatePatientForm() {
			// First name
			if ($("#firstName").val().trim() == "") {
				return "Insert First Name";
			}

			// Last name
			if ($("#lastName").val().trim() == "") {
				return "Insert Last Name.";
			}
			
			// NIC
			if ($("#nic").val().trim() == "") {
				return "Insert NIC.";
			}
			
			// Address
			if ($("#address").val().trim() == "") {
				return "Insert Address.";
			}
		
			
			// Gender
			if ($("#gender").val().trim() == 0 ) {
				return "Insert Gender.";
			}
			
			// email
			if ($("#email").val().trim() == "") {
				return "Insert Email.";
			}
			
			
			// Age
			if ($("#age").val().trim() == "") {
				return "Insert Age.";
			}

			
			// phone number
			if ($("#phone").val().trim() == "") {
				return "Insert Phone number.";
			}
			

			// Admitted Date
			if ($("#admitted").val().trim() == "") {
				return "Insert Admitted Date.";
			}
			
			
			return true;
		}
