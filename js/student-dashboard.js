var signout = document.getElementById("sign_out");
var cards = document.getElementsByClassName("card"); //array
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var submit = document.getElementById("submit");

//creating 3 done images
var done_img1 = document.createElement("img");
done_img1.src = "img/done.png";
done_img1.id = "done1";
done_img1.style.marginLeft = "8vh";

var done_img2 = document.createElement("img");
done_img2.src = "img/done.png";
done_img2.id = "done2";
done_img2.style.marginLeft = "8vh";

var done_img3 = document.createElement("img");
done_img3.src = "img/done.png";
done_img3.id = "done3";
done_img3.style.marginLeft = "8vh";
// end of creating images

// session
signout.onclick = function () {};

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
});

//change color of submit
submit.style.backgroundColor = "#ff6551";
