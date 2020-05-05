<%@page import="model.Patients"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Patient Details</title>
<link rel="stylesheet" href="View/css/bootstrap.min.css"> 
<script src="Component/jquery-3.5.0.min.js"></script> 
<script src="Component/patients.js"></script>
</head>
<body>

<div class="container">
		<div class="row">
			<div class="col-6">
				<h1>Patient Details</h1>
				<form id="PatientForm" name="PatientForm">
					
					FirstName: <input id="firstName" name="pFname" type="text"
						class="form-control form-control-sm"> <br> 
						
					LastName:<input id="lastName" name="pLname" type="text"
						class="form-control form-control-sm"> <br>
					
				
					NIC: <input id="nic" name="pNIC" type="text"
						class="form-control form-control-sm"> <br> 
						
					Address: <input id="address" name="pAddress" type="text"
						class="form-control form-control-sm"> <br> 
						
					Gender: <input id="gender" name="pGender" type="text"
						class="form-control form-control-sm"> <br> 
						
					Email:<input id="email" name="pEmail" type="text"
						class="form-control form-control-sm"> <br>
					
				
					Age: <input id="age" name="pAge" type="text"
						class="form-control form-control-sm"> <br> 
						
					Phone: <input id="phone" name="pPhone" type="text"
						class="form-control form-control-sm"> <br> 
						
					pAdmitted: <input id="admitted" name="pAdmitted" type="text"
						class="form-control form-control-sm"> <br> 
							
			
						
				
						 <br> <input
						id="btnSave" name="btnSave" type="button" value="Save"
						class="btn btn-primary"> <input type="hidden"
						id="hidLabIDSave" name="hidLabIDSave" value="">
						
				</form>
				
				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>
			<br>
				<div id="divLabGrid">
					 <%
					 Patients patiObj = new Patients(); 					
					 out.print(patiObj.readPatients());
 					  %>
					</div>


			</div>
		</div>
	</div>

</body>
</html>