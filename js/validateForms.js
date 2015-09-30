function validateInquiry() {
    var name = document.forms["inquiryForm"]["firstlast"].value;
    if (name == null || name == "") {
        alert("Name must be filled out.");
        return false;
    }

    var email = document.forms["inquiryForm"]["email"].value;
    var phone = document.forms["inquiryForm"]["phone"].value;
    if ((email == null || email == "")  && (phone == null || phone == "")) {
        alert("Please enter some way to contact you.");
        return false;
    }

	var inquiry = document.forms["inquiryForm"]["inquiry"].value;
    if (inquiry == null || inquiry == "") {
        alert("Please enter a question.");
        return false;
    }   
}

function validateMaintenance() {
    var name = document.forms["maintenanceRequest"]["firstlast"].value;
    if (name == null || name == "") {
        alert("Name must be filled out.");
        return false;
    }

    var location = document.forms["maintenanceRequest"]["location"].value;
    if (location == null || location == "") {
        alert("Please tell which property you rent.");
        return false;
    }

    var contact = document.forms["maintenanceRequest"]["contact"].value;
    if (contact == null || contact == "") {
        alert("Please give us a way to contact you.");
        return false;
    }

    var request = document.forms["maintenanceRequest"]["request"].value;
    if (request == null || request == "") {
        alert("Please describe the problem.");
        return false;
    }
       
}

function validateApplication() {
    
}