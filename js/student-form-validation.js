const currentDate = new Date().toISOString().split("T")[0];
document.getElementById("birthday").max = currentDate;

(() => {
  "use strict";

  // Check if the form has already been submitted
  if (localStorage.getItem("formSubmitted") === "true") {
    window.location.href = "student-dashboard.html";
  }

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

          //Save report about the information related to the user tests
          var allUserTestInfo=JSON.parse(localStorage.getItem("userData"));
          var userTestInfo=allUserTestInfo[parseInt(sessionStorage.getItem("userID"))-1];
          // Store the form data in local storage
          // localStorage.setItem("formData", JSON.stringify(formData));
          userTestInfo["userForm"]=formData;
          userTestInfo["userFormComplete"]=true;
          localStorage.setItem("userData",JSON.stringify(allUserTestInfo));
          // Mark the form as submitted
          // localStorage.setItem("formSubmitted", "true");

          window.location.href = "student-dashboard.html";
        }

        form.classList.add("was-validated");
        // Bootstrap Classs -> was-validated
        // It adds a green checkmark icon next to valid form controls.
        // It adds a red exclamation mark icon next to invalid form controls.
        // It applies a green border color to valid form controls.
        // It applies a red border color to invalid form controls.
        // It displays validation feedback messages below the form controls.
      },
      false
    );
  });
})();
