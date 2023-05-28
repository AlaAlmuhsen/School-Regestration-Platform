

var dark_mode = document.getElementById("dark-mode");
dark_mode.checked = true;

dark_mode.addEventListener("change", function () {
  if (dark_mode.checked == true) {
    //dark mode
    sessionStorage.setItem("dark-mode", true);
    document.documentElement.style.setProperty("--second-color", "#919191");
    document.documentElement.style.setProperty("--third-color", "#333333");
    document.documentElement.style.setProperty("--fourth-color", "#1a1a1a");
    document.documentElement.style.setProperty("--fifth-color", "#f1efef");
    document.documentElement.style.setProperty("--sixth-color", "#f1efef");
    document.documentElement.style.setProperty("--seventh-color", "black");
  }
  if (dark_mode.checked == false) {
    //light mode
    sessionStorage.setItem("dark-mode", false); //fales is stored as a string
    document.documentElement.style.setProperty("--second-color", "#b5b5b5");
    document.documentElement.style.setProperty("--third-color", "#f1efef");
    document.documentElement.style.setProperty("--fourth-color", "white");
    document.documentElement.style.setProperty("--fifth-color", "black");
    document.documentElement.style.setProperty("--sixth-color", "#f1efef");
    document.documentElement.style.setProperty("--seventh-color", "white");
  }
});

window.addEventListener("load", () => {
  if (sessionStorage.getItem("dark-mode") == "true") {
    dark_mode.checked = true;
  } else {
    dark_mode.checked = false;
  }
});

if (sessionStorage.getItem("dark-mode") == "true") {
  document.documentElement.style.setProperty("--second-color", "#919191");
  document.documentElement.style.setProperty("--third-color", "#333333");
  document.documentElement.style.setProperty("--fourth-color", "#1a1a1a");
  document.documentElement.style.setProperty("--fifth-color", "#f1efef");
  document.documentElement.style.setProperty("--sixth-color", "#f1efef");
  document.documentElement.style.setProperty("--seventh-color", "black");
} else {
  document.documentElement.style.setProperty("--second-color", "#b5b5b5");
  document.documentElement.style.setProperty("--third-color", "#f1efef");
  document.documentElement.style.setProperty("--fourth-color", "white");
  document.documentElement.style.setProperty("--fifth-color", "black");
  document.documentElement.style.setProperty("--sixth-color", "#f1efef");
  document.documentElement.style.setProperty("--seventh-color", "white");
}
