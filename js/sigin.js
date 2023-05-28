
//sign in page + sign up page
function checkinputEmpty(strValue){
    return strValue !== ''
}

//sign in page + sign up page
function ValidEmail(strEmail){
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailPattern.test(strEmail)
}

//sign up
function checkPassword(password) {
  // Check length
  if (password.length <= 8) {
    return false;
  }

  // Check for at least one number
  if (!/\d/.test(password)) {
    return false;
  }

  // Check for at least one letter
  if (!/[a-zA-Z]/.test(password)) {
    return false;
  }

  // Check for at least one symbol
  if (!/[!@#$%^&*()\-=_+[\]{}|;:,.<>?]/.test(password)) {
    return false;
  }

  // All checks passed
  return true;
}

//sign up page
function checkCharMoreThan10(strValue){
    return strValue.length >=10
}

function checkPasswordMatch(pass,confPass){
  return pass===confPass
}

function checkNoSpace(username) {
  var pattern = /^\S+$/; 
  return pattern.test(username);
}

function checkIsUsernameExists(username) {
  var savedData = localStorage.getItem("userData");
  //Edited
  var users;
  if (savedData!=null)
  {users = JSON.parse(savedData);}
  else{
    users=[]
  }
  //Edited
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === username) {
      return true; 
    }
  }
  return false; 
}

//sign up page
//adding a new user to local storage after signing up 
//redirecting to sign in page after adding
 function Adduser(){

    var savedData = localStorage.getItem("userData");
    var parsedData = JSON.parse(savedData); //array of objects

    let user = [];
    let userData = {}; //object
    let lastUserID=0;
    // the array is empty, I want to add a new user to old users. ParsedData is array of objects and I want to add it to users array as an element not as an array and push alone adds array to an array, .push.apply adds an element to an array 

    user.push.apply(user, parsedData); //if there is data. user[] becomes array of objects

    //if we are not adding an element for the first time enter the if statement and get the last id (where counting starts from 1) 
  if(user.length>0){
    const lastObject = user[user.length - 1]; //element = object
     lastUserID = lastObject.userId;
  }

    // console.log(user);
    // console.log(lastUserID);

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

    let mathTestQuestions=[];
    let englishTestQuestions=[];

    let userForm=[];
    let userFormComplete=false;
    
    let regestrationCompleted = false;

    //adding properties to the object
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
    userData.regestrationCompleted = regestrationCompleted;
    userData.mathTestQuestions = mathTestQuestions;
    userData.englishTestQuestions = englishTestQuestions;


    user.push(userData); //push object to array
    localStorage.setItem("userData", JSON.stringify(user));//array to string

    // console.log(user);
    window.location.href = "signin.html";
  }
// end of Adduser function


//sign in page 
// check if username and password are in localstorage then redirect the user to student-dashboard.html
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
if (emailInput == "admin@gmail.com" && passwordInput == "admin123"){
  sessionStorage.setItem("adminActive" , "true");
  window.location.href = "admin-dashboard.html";
}
else {
  // Iterate through the array to check for a match
  for (var i = 0; i < users.length; i++) {
    var userDate = users[i];//element = object
    if (userDate.email === emailInput && userDate.password === passwordInput) {
      matchFound = true;
      profileUsername=userDate.username;
      usernameID=userDate.userId;
      break;
    }
  }
  // Check if a match was found
  if (matchFound) {

      sessionStorage.setItem("userActive", "true");
      sessionStorage.setItem("username", profileUsername);
      sessionStorage.setItem("userID", usernameID);

      // console.log(sessionStorage.getItem("userActive"));
      // console.log(sessionStorage.getItem("username"));    
      window.location.href = "student-dashboard.html";
  } else {
      document.getElementById("lblSignAlert").innerHTML="Username and password do not match.";
  }
    }
}
//end of checkUsernameAndPassword function

  

//   sessionStorage.setItem("userActive", "False");

//   sessionStorage.getItem("userActive");
//   sessionStorage.getItem("username");
//   sessionStorage.getItem("userID");

