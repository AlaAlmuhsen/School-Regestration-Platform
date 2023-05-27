const currentDate = new Date().toISOString().split("T")[0];
document.getElementById("birthday").max = currentDate;

let signout = document.getElementById("sign_out");

//Save report about the information related to the user tests
var allUserTestInfo = JSON.parse(localStorage.getItem("userData"));
var userTestInfo =
  allUserTestInfo[parseInt(sessionStorage.getItem("userID")) - 1];
// check if the user filled the form .
if (userTestInfo["userFormComplete"] === true) {
  window.location.href = "student-dashboard.html";
}
// check if the user log in .
if (
  sessionStorage.getItem("userActive") == null ||
  sessionStorage.getItem("userActive") == false
) {
  location.href = "index.html";
}

signout.onclick = function () {
  sessionStorage.setItem("userActive", "false");
  location.href = "index.html";
};

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        event.stopPropagation();

if (form.checkValidity()) {

// Create an object to store the form data
const formData = {};

// Get all the form fields
const fields = form.querySelectorAll("input, select");

// Loop over the fields and store their values in the formData object
Array.from(fields).forEach((field) => {
formData[field.id] = field.value;
});

// Store the form data in local storage
userTestInfo["userForm"] = formData;
userTestInfo["userFormComplete"] = true;
localStorage.setItem("userData", JSON.stringify(allUserTestInfo));
window.location.href = "student-dashboard.html";
}
form.classList.add("was-validated");
// Bootstrap Classs -> was-validated
// It displays validation feedback messages below the form controls.
},
false
    );
  });
})();
