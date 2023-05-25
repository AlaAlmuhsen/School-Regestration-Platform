

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
    let lastUserID=0;
    user.push.apply(user, parsedData);

  if(user.length>0){
    const lastObject = user[user.length - 1];
     lastUserID = lastObject.userId;
  }

    console.log(user);
    console.log(lastUserID);

    let email = document.getElementById('txtSignupEmail').value.trim();
    let username = document.getElementById('txtSignupUsername').value.trim();
    let password = document.getElementById('txtSignupPassword').value.trim();
    let userId=lastUserID+1;

    let userFinishEnglishTest=false;
    let userEnglishTestScore=0;
    let userEnglishAnswers=[];

    let userFinishMathTest=false;
    let userMathTestScore=0;
    let userMathAnswers=[];

    let userForm=[];
     let userFormComplete=false;

    userData.email = email;
    userData.username = username;
    userData.password = password;
    userData.userId = userId;
    userData.userFinishEnglishTest = userFinishEnglishTest;
    userData.userEnglishTestScore = userEnglishTestScore;
    userData.userEnglishAnswers = userEnglishAnswers;
    userData.userFinishMathTest = userFinishMathTest;
    userData.userMathTestScore = userMathTestScore;
    userData.userMathAnswers = userMathAnswers;
    userData.userForm = userForm;
    userData.userFormComplete = userFormComplete;

    user.push(userData);
    localStorage.setItem("userData", JSON.stringify(user));

    // console.log(user);
    window.location.href = "signin.html";
   }


  function checkUsernameAndPassword(){
    var savedData = localStorage.getItem("userData");
    var parsedData = JSON.parse(savedData);

    let users = [];
    users.push.apply(users, parsedData);

    let profileUsername='';
    let usernameID='';

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
    usernameID=userDate.userId;
    break;
  }
}
// Check if a match was found
if (matchFound) {

    sessionStorage.setItem("userActive", "True");
    sessionStorage.setItem("username", profileUsername);
    sessionStorage.setItem("userID", usernameID);

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
//   sessionStorage.getItem("userID");

