function showNav() {
  var element1 = document.getElementsByClassName("c-top-navbar");
  var element2 = document.getElementsByClassName("c-side-navbar");
  var toggleButton = document.getElementById("toggleButton");
  var closeButton = document.getElementById("closeButton");
  for (var i = 0; i < element1.length; i++) {
    element1[i].classList.toggle("navbar--show-items");
  }
  for (var i = 0; i < element2.length; i++) {
    element2[i].classList.toggle("navbar--show-items");
  }
  toggleButton.style.display =
    toggleButton.style.display === "none" ? "block" : "none";
  closeButton.style.display =
    closeButton.style.display === "none" ? "block" : "none";
}

// Code to set the active state
var currentPage = window.location.pathname;
if (currentPage === "/about-me.html") {
  document.getElementById("aboutLink").classList.add("link--active");
}
