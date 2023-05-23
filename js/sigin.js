
function validateEmail(txtUsername,txtPassword) {
  const emailInput = txtUsername;
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isNotEmpty = emailValue !== '';
  const isValidEmail = emailPattern.test(emailValue);
  let emailAlert= document.getElementById("lblEmailAlert");
  if (isNotEmpty && isValidEmail) {
    validatePasswordEmpty(txtPassword);
    emailAlert.innerHTML ='';
  } else if(!isNotEmpty) {
    emailAlert.innerHTML ='Please Enter Your Email'
  }
  else if(!isValidEmail){
    emailAlert.innerHTML ='Invalid Email Address'
  }
  else{
    emailAlert.innerHTML ='Invalid email address or empty input';
    // console.log('');

  }
}


function validatePasswordEmpty(txtPassword){
    const passwordInput = txtPassword;
    const passwordValue = passwordInput.value.trim();
    const isNotEmpty = passwordValue !== '';
    let emailAlert= document.getElementById("lblPasswordAlert");

    if (isNotEmpty) {
        emailAlert.innerHTML="";

        // console.log('Password is valid');
        // After Check Every Things
      } 
      else{
        emailAlert.innerHTML="Please Enter Your Password";

      }
}


// function checkEmailPasswordInput(){

// }