function showNav() {
  var element1 = document.getElementsByClassName("c-top-navbar");
  var element2 = document.getElementsByClassName("c-side-navbar");
  var toggleButton = document.getElementById("toggleButton");
  var closeButton = document.getElementById("closeButton");
  for (var i = 0; i < element1.length; i++) {
    element1[i].classList.toggle("c-navbar--show-items");
  }
  for (var i = 0; i < element2.length; i++) {
    element2[i].classList.toggle("c-navbar--show-items");
  }
  toggleButton.style.display =
    toggleButton.style.display === "none" ? "block" : "none";
  closeButton.style.display =
    closeButton.style.display === "none" ? "block" : "none";
}

// Code to set the active state
const navLinks = document.querySelectorAll(
  ".c-top-navbar__link, .c-side-navbar__link"
); // Get all navigation links

const currentPageUrl = window.location.href; // Get the current page URL

navLinks.forEach((link) => {
  // Check if the link href matches the current page URL
  if (link.href === currentPageUrl) {
    // Add a class to mark it as active
    link.classList.add("link--active");
  }
});
