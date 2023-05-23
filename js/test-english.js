let signOutButton=document.querySelector(".signup__button");

//changeSignOutIcon(): Change the content of the sign out button when the screen width is below 576 pixels.
function changeSignOutIcon(){
    if (screen.width < 576){
        signOutButton.innerHTML=`<img style="width: 100%; height: 60%; filter: invert(100%); " src="img/logout.svg" alt="">`;
    }else{
        signOutButton.innerHTML="Sign Out";
    }
    
}
window.addEventListener("resize", function(){
    changeSignOutIcon()
});

