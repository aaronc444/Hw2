/* 
Name: Aaron Cherian 
  File: homework1-mis3371.html 
  Date created: 09/01/2024
  Last Updated: 09/15/2024
  Purpose: Medical Form for MIS 3371 HW1  
*/

 // Dynamic date JS code
    const d = new Date();
    let text = d.toLocaleDateString();
    document.getElementById("today").innerHTML = text;

    // Range slider JS code
    let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value;

    slider.oninput = function() {
      output.innerHTML = this.value; };
      

function validateDob() {
  dob = document.getElementById("dob");
  let date = new Date(dob.value);
  let maxDate = new Date().setFullYear(new Date() - 120);

  if (date > newDate()) {
    document.getElementById("dob-error").innerHTML = "Date cannot be in the future.";
    dob.value = "";
    return false;
  } else if (date < new Date(maxDate)) {
    document.getElementById("dob-error").innerHTML = "Date cannot be more than 120 years ago.";
    dob.value = "";
    return false;
  } else {
    document.getElementById("dob-error").innerHTML = "";
    return true;
  }
}

// ssn validation js code
function validateSsn() {
    const ssn = document.getElementById("ssn").value;

    // regex for ssn pattern thing
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML =
            "Please enter a valid Social Security Number.";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

function validateAddress1() {
    var ad1 = document.getElementById("address1").value;

    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML =
            "Please enter something on address line";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

// zip code validation js code
function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g, ""); //removes any non-number and non-dash characters

    if (!zip) {
        document.getElementById("zcode-error").innerHTML =
            "Zip code cannot be left blank.";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5); //removes all digits after first 5
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

// email validation js code
function validateEmail() {
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regex pattern thing for email

    if (email === "") {
        document.getElementById("email-error").innerHTML =
            "Email cannot be empty.";
        return false;
    } else if (!email.match(emailR)) {
        document.getElementById("email-error").innerHTML =
            "Please enter a valid email address.";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;   

    }
}

// phone number validation js code
function validatePhnum() {
    const phoneInput = document.getElementById("phnum");
    const phone = phoneInput.value.replace(/\D/g, ""); // Remove all non-numeric characters

    if (phone.length == 0) {
        document.getElementById("phnum-error").innerHTML = "Please enter a valid 10-digit phone number.";
        return false;
    }
     const formattedPhone = 
     phone.slice(0,3) + "-" +  phone.slice(3,6) + "-" +  phone.slice(6,10)
     phoneInput.value = formattedPhone;
     document.getElementById("phnum-error").innerHTML = "";
     return true;

}
//username validaation js code
function validateUname() {
    uname=document.getElementById("uname").value;

        //converts username to lowercase
        uname = uname.toLowerCase();

        //display username in lowercase
        document.getElementById("uname").value=uname;

        if (uname.length === 0){
            document.getElementById("uname-error").innerHTML=
            "Username field cannot be empty.";
            return false;
        }
//checks that username does not start with a number
if (!isNaN(uname.charAt(0))) {
document.getElementById("uname-error").innerHTML=
"Username cannot begin with a number.";
return false
}

//checks that username consists of only letters, number, or underscores
let regex = /^[a-zA-Z0-9_]+$/;

if (!regex.test(uname)) {
    document.getElementById("uname-error").innerHTML =
     "Username can only contain letters, numbers, or underscores.";
    return false;
} else if (uname.length < 5) {
    document.getElementById("uname-error").innerHTML = 
    "Username must be at least 5 characters.";
    return false;
} else if (uname.length > 30) { 
    //checks that username does not have more than 30 characters
    document.getElementById("uname-error").innerHTML = 
    "Username cannot exceed 30 characters.";
    return false;
} else { //if all of the above checks pass then username is valid
    document.getElementById("uname-error").innerHTML = "";
    return true;
}
       
}


// password validation js code
function validatePassword() {
    const pword = document.getElementById("pword").value;
    const uname = document.getElementById("uname").value;

    // sets up and initializes array
    const errorMessage = [];

    // check for lowercase letters
    if (!pword.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter.");
    }

    // check for uppercase letters
    if (!pword.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter.");
    }

    // check for numbers
    if (!pword.match(/[0-9]/)) {
        errorMessage.push("Enter at least one number.");
    }

    // check for special characters
    if (!pword.match(/[!\@#$%&*\-_+\(\)]/)) {
        errorMessage.push("Enter at least special character.");
    }

    // check for username not in password
    if (pword == uname || pword.includes(uname)) {
        errorMessage.push("Password cannot contain username.");
    }

    // displays error messages if there any errors
const errorContainer = document.querySelector(".pword-message");

errorContainer.innerHTML = errorMessage.map((message) => `<span>${message}</span><br/>`).join("");
}

// confirm password validation js code
function confirmPassword() {
    const pword1 = document.getElementById("pword").value;
    const pword2 = document.getElementById("con_pword").value;

    if (pword1 != pword2) {
        document.getElementById("pword2-error").innerHTML = "Passwords do not match.";
        return false;
    } else {
        document.getElementById("pword2-error").innerHTML = "Passwords match.";
        return true;
    }
}
// re-display user input back to user (review button)

function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput;

    var i;
    formoutput = "<table class='output'><th colspan='3'>Your Information:</th>";

    for (i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value != "") {
            var datatype = formcontent.elements[i].type;

            switch (datatype) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = formoutput + "<td class='outputdata'>&#x2713;</td></tr>";
                    }
                    break;

                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    }
                    break;

                case "button":
                case "submit":
                case "reset":
                    break;

                default:
                    formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name  + "</td>";
                    formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
            }
        }
    }

    if (formoutput.length > 0) {
        formoutput = formoutput + "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }
}
//remove user input
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}




