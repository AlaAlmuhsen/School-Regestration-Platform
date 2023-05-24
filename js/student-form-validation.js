const currentDate = new Date().toISOString().split("T")[0];
document.getElementById("birthday").max = currentDate;

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
          form.innerHTML = `<h1> Thank Your For Enter Your Infromation . </h1>
          `;
          form.style.color = "green";
          console.log(formData);
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
