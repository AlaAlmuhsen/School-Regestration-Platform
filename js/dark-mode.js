var dark_mode = document.getElementById("dark-mode");

dark_mode.addEventListener('change', function() {
    if (dark_mode.checked == true) {//dark mode
      document.documentElement.style.setProperty("--second-color", "#919191");
      document.documentElement.style.setProperty("--third-color", "#333333");
      document.documentElement.style.setProperty("--fourth-color", "#1a1a1a");
      document.documentElement.style.setProperty("--fifth-color", "#f1efef");
      document.documentElement.style.setProperty("--sixth-color", "#f1efef");
      document.documentElement.style.setProperty("--seventh-color", "black");

    }
    if (dark_mode.checked == false) {//light mode
      document.documentElement.style.setProperty("--second-color", "#b5b5b5");
      document.documentElement.style.setProperty("--third-color", "#f1efef");
      document.documentElement.style.setProperty("--fourth-color", "white");
      document.documentElement.style.setProperty("--fifth-color", "black");
      document.documentElement.style.setProperty("--sixth-color", "#f1efef");
      document.documentElement.style.setProperty("--seventh-color", "white");
    }
    
    });