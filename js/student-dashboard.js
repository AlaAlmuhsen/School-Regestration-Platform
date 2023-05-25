var signout = document.getElementById("sign_out");
var cards = document.getElementsByClassName("card"); //array
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var submit = document.getElementById("submit");
var counter = 0 ;

//check if user is signed in 
if(sessionStorage.getItem("userActive") == null || sessionStorage.getItem("userActive") == false)
{
location.href = "index.html";
}

//show username - Welcome ---- !
document.getElementById("username").innerHTML =
  sessionStorage.getItem("username");

//creating 3 done images
var done_img1 = document.createElement("img");
done_img1.src = "img/done.png";
done_img1.id = "done1";
done_img1.style.marginLeft = "22%";

var done_img2 = document.createElement("img");
done_img2.src = "img/done.png";
done_img2.id = "done2";
done_img2.style.marginLeft = "22%";

var done_img3 = document.createElement("img");
done_img3.src = "img/done.png";
done_img3.id = "done3";
done_img3.style.marginLeft = "22%";
// end of creating images

// ----------------------------------------------------
// start sign out
signout.onclick = function () {
  sessionStorage.setItem("userActive", "false");
  location.href = "index.html";
};


//signout icon on mobile
function changeSignOutIcon() {
  if (screen.width < 576) {
    signout.innerHTML = `<img style="width: 100%; height: 60%; filter: invert(100%);" src="img/logout.svg" alt="signOut">`;
  } else {
    signout.innerHTML = "Sign Out";
  }
}
window.addEventListener("resize", function () {
  changeSignOutIcon();
});
//end of sign out

//change color of the card to green

//if()//Is Information filled?
// cards[0].style.cursor = 'default'
// cards[0].style.border = "solid 1px green";
// cards[0].style.boxShadow = "0px 3px 8px lightgreen";
// form1.after(done_img1);

//Is there a score in local storage


//Muhammad Alfreijat-----Now user can enter both tests based on userFinishEnglishTest and userFinishMathTest values------------------------------------
var allUserTestInfo=JSON.parse(localStorage.getItem("userData"));
var userTestInfo=allUserTestInfo[parseInt(sessionStorage.getItem("userID"))-1];

if (userTestInfo["userFinishEnglishTest"] === true) {
  cards[1].style.cursor = 'default'
  cards[1].style.border = "solid 1px green";
  cards[1].style.boxShadow = "0px 3px 8px lightgreen";
  form2.after(done_img2);
}

if (userTestInfo["userFinishMathTest"] === true) {
  cards[2].style.cursor = 'default'
  cards[2].style.border = "solid 1px green";
  cards[2].style.boxShadow = "0px 3px 8px lightgreen";
  form3.after(done_img3);
}

//redirect to tests and the form
cards[0].addEventListener("click", function () {
  location.href = "student-form.html";
});

cards[1].addEventListener("click", function () {
  if (userTestInfo["userFinishEnglishTest"] === false)
    location.href = "test-english.html";
});

cards[2].addEventListener("click", function () {
  if (userTestInfo["userFinishMathTest"] === false)
    location.href = "test-math.html";
});

//change color of submit
if (
  localStorage.getItem("userFinishEnglishTest") === 'true' &&
  localStorage.getItem("userFinishMathTest") === 'true'
)
{
  submit.style.cursor = 'pointer';
  submit.style.backgroundColor = "var(--main-color)";
  location.href = "student-result.html";
}