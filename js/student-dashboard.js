var signout = document.getElementById("sign_out");
var cards = document.getElementsByClassName("card"); //array
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var submit = document.getElementById("submit");
var counter = 0 ;

<<<<<<< HEAD
=======
//check if user is signed in 
if(sessionStorage.getItem("userActive") === null )
{
location.href = "index.html";
}

//show username - Welcome ---- !
document.getElementById("username").innerHTML =
  sessionStorage.getItem("username");

>>>>>>> d48eecf68a37a654c323c2f3e71bb1de46b080e7
//creating 3 done images
var done_img1 = document.createElement("img");
done_img1.src = "img/done.png";
done_img1.id = "done1";
<<<<<<< HEAD
done_img1.style.marginLeft = "8vh";
=======
done_img1.style.marginLeft = "22%";
>>>>>>> d48eecf68a37a654c323c2f3e71bb1de46b080e7

var done_img2 = document.createElement("img");
done_img2.src = "img/done.png";
done_img2.id = "done2";
<<<<<<< HEAD
done_img2.style.marginLeft = "8vh";
=======
done_img2.style.marginLeft = "22%";
>>>>>>> d48eecf68a37a654c323c2f3e71bb1de46b080e7

var done_img3 = document.createElement("img");
done_img3.src = "img/done.png";
done_img3.id = "done3";
<<<<<<< HEAD
done_img3.style.marginLeft = "8vh";
// end of creating images

// session
signout.onclick = function () {};
=======
done_img3.style.marginLeft = "22%";
// end of creating images

// ----------------------------------------------------
// start sign out
signout.onclick = function () {
  location.href = "index.html";
  sessionStorage.clear();
};

>>>>>>> d48eecf68a37a654c323c2f3e71bb1de46b080e7

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

<<<<<<< HEAD

cards[0].addEventListener("click", function (e) {
  //if()//Is there a score in local storage
  cards[0].style.border = "solid 1px green";
  cards[0].style.boxShadow = "0px 3px 8px lightgreen";
  form1.after(done_img2);
});

cards[1].addEventListener("click", function (e) {
  //if()//Is there a score in local storage
  cards[1].style.border = "solid 1px green";
  cards[1].style.boxShadow = "0px 3px 8px lightgreen";
  form2.after(done_img2);
});

cards[2].addEventListener("click", function (e) {
  //if()//Is there a score in local storage
  cards[2].style.border = "solid 1px green";
  cards[2].style.boxShadow = "0px 3px 8px lightgreen";
  form3.after(done_img3);
=======
//change color of the card to green

//if()//Is Information filled?
// cards[0].style.cursor = 'default'
// cards[0].style.border = "solid 1px green";
// cards[0].style.boxShadow = "0px 3px 8px lightgreen";
// form1.after(done_img1);

//Is there a score in local storage
if (localStorage.getItem("userFinishEnglishTest") === 'true') {
  cards[1].style.cursor = 'default'
  cards[1].style.border = "solid 1px green";
  cards[1].style.boxShadow = "0px 3px 8px lightgreen";
  form2.after(done_img2);
}

if (localStorage.getItem("userFinishMathTest") === 'true') {
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
  if (localStorage.getItem("userFinishEnglishTest") === 'false')
    location.href = "test-english.html";
});

cards[2].addEventListener("click", function () {
  if (localStorage.getItem("userFinishMathTest") === 'false')
    location.href = "test-math.html";
>>>>>>> d48eecf68a37a654c323c2f3e71bb1de46b080e7
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