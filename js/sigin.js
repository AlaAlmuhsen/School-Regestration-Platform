
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

 function Adduser(){
    var savedData = localStorage.getItem("userData");
    var parsedData = JSON.parse(savedData);


    let user = [];
    let userData = {};

    user.push.apply(user, parsedData);

    let email = document.getElementById('txtSignupEmail').value.trim();
    let username = document.getElementById('txtSignupUsername').value.trim();
    let password = document.getElementById('txtSignupPassword').value.trim();

    userData.email = email;
    userData.username = username;
    userData.password = password;


user.push(userData);
localStorage.setItem("userData", JSON.stringify(user));

console.log(user);
window.location.href = "signin.html";
 }
  








  function checkUsernameAndPassword(){
    var savedData = localStorage.getItem("userData");
    var parsedData = JSON.parse(savedData);

    let users = [];
    users.push.apply(users, parsedData);

    let profileUsername='';

var emailInput = document.getElementById("txtEmail").value.trim();
var passwordInput =  document.getElementById("txtPassword").value.trim();

// Flag to indicate if the username and password match
var matchFound = false;

// Iterate through the array to check for a match
for (var i = 0; i < users.length; i++) {
  var userDate = users[i];
  if (userDate.email === emailInput && userDate.password === passwordInput) {
    matchFound = true;
    profileUsername=userDate.username;
    break;
  }
}
// Check if a match was found
if (matchFound) {

    sessionStorage.setItem("userActive", "True");
    sessionStorage.setItem("username", profileUsername);
    // console.log(sessionStorage.getItem("userActive"));
    // console.log(sessionStorage.getItem("username"));    
    window.location.href = "student-dashboard.html";
} else {
    document.getElementById("lblSignAlert").innerHTML="Username and password do not match.";
}
  }



//   sessionStorage.setItem("userActive", "False");

//   sessionStorage.getItem("userActive");
//   sessionStorage.getItem("username");
