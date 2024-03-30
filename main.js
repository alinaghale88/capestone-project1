// Code to make hamburger menu functional
function showNav() {
    var element1 = document.getElementsByClassName("c-menu-block");
    var toggleButton = document.getElementById("toggleButton");
    var closeButton = document.getElementById("closeButton");
    for (var i = 0; i < element1.length; i++) {
      element1[i].classList.toggle("c-menu-block--show-items");
    }
    toggleButton.style.display =
      toggleButton.style.display === "none" ? "block" : "none";
    closeButton.style.display =
      closeButton.style.display === "none" ? "block" : "none";
  }