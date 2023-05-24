
// function validateEmail(txtUsername,txtPassword) {
//   const emailInput = txtUsername;
//   const emailValue = emailInput.value.trim();
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const isNotEmpty = emailValue !== '';
//   const isValidEmail = emailPattern.test(emailValue);
//   let emailAlert= document.getElementById("lblEmailAlert");
//   if (isNotEmpty && isValidEmail) {
//     validatePasswordEmpty(txtPassword);
//     emailAlert.innerHTML ='';
//   } else if(!isNotEmpty) {
//     emailAlert.innerHTML ='Please Enter Your Email'
//   }
//   else if(!isValidEmail){
//     emailAlert.innerHTML ='Invalid Email Address'
//   }
//   else{
//     emailAlert.innerHTML ='Invalid email address or empty input';
//     // console.log('');

//   }
// }


// function validatePasswordEmpty(txtPassword){
//     const passwordInput = txtPassword;
//     const passwordValue = passwordInput.value.trim();
//     const isNotEmpty = passwordValue !== '';
//     let emailAlert= document.getElementById("lblPasswordAlert");

//     if (isNotEmpty) {
//         emailAlert.innerHTML="";

//         // console.log('Password is valid');
//         // After Check Every Things
//       } 
//       else{
//         emailAlert.innerHTML="Please Enter Your Password";

//       }
// }


// function checkEmailPasswordInput(){

// }

function checkinputEmpty(strValue){
    return strValue !== ''
}

function ValidEmail(strEmail){
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailPattern.test(strEmail)
}

function checkCharMoreThan10(strValue){
    return strValue.length >=10
}


// function validateEmail(txtUsername) {
//     let emailInput = txtUsername;
//     let emailValue = emailInput.value.trim();
//     let isNotEmpty = checkinputEmpty(emailValue);
//     let isValidEmail = ValidEmail(emailValue);

//     let message=0;
//     // let emailAlert= document.getElementById("lblEmailAlert");
//     if (isNotEmpty && isValidEmail) {
//         message=0;
//     } else if(!isNotEmpty) {
//         message =1;
//     }
//     else if(!isValidEmail){
//         message =2;
//     }
//     else{
//         message =3;
//       // console.log('');
//     }
//     return message;
//   }

 
  
  btnSignup.addEventListener('click',function(){

    let txtEmail=document.getElementById('txtSignupEmail');
    let emailValue = txtEmail.value.trim();
    let emailErorr=document.getElementById('lblEmailErorr');


    let txtUsername=document.getElementById('txtSignupUsername');
    let usernameValue = txtUsername.value.trim();
    let usernameErorr=document.getElementById('lblUsernameErorr');


    // let message=validateEmail(txtEmail);

    if(checkinputEmpty(emailValue) && ValidEmail(emailValue)){
        emailErorr.innerHTML= '';
        if(checkinputEmpty(usernameValue) && checkCharMoreThan10(usernameValue)){
        // emailErorr.innerHTML= "Done";
        // emailErorr.style.color="green";

        usernameErorr.innerHTML= "Done";
        usernameErorr.style.color="green";
    }
    else if(!checkinputEmpty(usernameValue)){
        usernameErorr.innerHTML= 'Please Enter Your Username';
        usernameErorr.style.color="red";
    }
    else if(!checkCharMoreThan10(usernameValue)){
        usernameErorr.innerHTML= 'Please Enter More Than 10 char';
        usernameErorr.style.color="red";
    }
    else{
        usernameErorr.innerHTML= 'Invalid Username or empty input';
        usernameErorr.style.color="red";
    }
    }
    else if(!checkinputEmpty(emailValue)){
        emailErorr.innerHTML= 'Please Enter Your Email';
        emailErorr.style.color="red";
    }
    else if(!ValidEmail(emailValue)){
        emailErorr.innerHTML= 'Invalid Email Address';
        emailErorr.style.color="red";
    }
    else{
        emailErorr.innerHTML= 'Invalid email address or empty input';
        emailErorr.style.color="red";
    }
  })


