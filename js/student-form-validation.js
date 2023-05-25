const currentDate = new Date().toISOString().split("T")[0];
document.getElementById("birthday").max = currentDate;

(() => {
  "use strict";

  // Check if the form has already been submitted
  if (localStorage.getItem("formSubmitted") === "true") {
    const form = document.querySelector(".needs-validation");
    let info = document.querySelector(".info");
    info.style.display = "none";
    form.innerHTML = `
      <h1 style="color: green; text-align: center;">Form Already Submitted. Thank You!</h1>
      <div class="rtn__button__container d-flex w-100 justify-content-center">
        <a href="student-dashboard.html">
          <button class="return__button my-3">RETURN</button>
        </a>
      </div>
    `;
    
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

          console.log(formData);
          // Store the form data in local storage
          localStorage.setItem("formData", JSON.stringify(formData));
          // Mark the form as submitted
          localStorage.setItem("formSubmitted", "true");

          form.innerHTML = `
            <h1 style="color: green; text-align: center;">Form Submitted. Thank You!</h1>
            <div class="rtn__button__container d-flex w-100 justify-content-center">
              <a href="student-dashboard.html">
                <button class="return__button my-3">RETURN</button>
              </a>
            </div>
          `;
          let info = document.querySelector(".info");
          info.style.display = "none";
          const returnButton = document.querySelector(".return__button");
          returnButton.addEventListener("click", function () {
            window.location.href = "student-dashboard.html";
          });
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
