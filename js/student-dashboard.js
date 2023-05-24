var signout = document.getElementById("sign_out");

// session
signout.onclick = function () {

};

function changeSignOutIcon(){
    if (screen.width < 576){
        signout.innerHTML=`<img style="width: 100%; height: 60%; filter: invert(100%);" src="img/logout.svg" alt="signOut">`;

    }else{
        signout.innerHTML="Sign Out";

    }

}
window.addEventListener("resize", function(){
    changeSignOutIcon()
});