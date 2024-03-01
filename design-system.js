function showNav() {
  var element1 = document.getElementsByClassName("c-side-navbar");
  var toggleButton = document.getElementById("toggleButton");
  var closeButton = document.getElementById("closeButton");
  for (var i = 0; i < element1.length; i++) {
    element1[i].classList.toggle("c-navbar--show-items");
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

// Function to move menu items between navbars based on viewport width
function adjustMenuItems() {
  const aboutMenuItem = document.getElementById('aboutLink').parentNode;
  const demoMenuItem = document.getElementById('demoLink').parentNode;
  const sideNavbar = document.querySelector('.c-side-navbar__menu');
  const desktopNavbar = document.querySelector('.c-top-navbar__menu');

  if (window.innerWidth < 1200) {
    // Move menu items to top of side navbar
    sideNavbar.insertBefore(aboutMenuItem, sideNavbar.firstChild);
    sideNavbar.insertBefore(demoMenuItem, sideNavbar.firstChild);
  } else {
    // Move menu items back to desktop navbar
    desktopNavbar.appendChild(aboutMenuItem);
    desktopNavbar.appendChild(demoMenuItem);
  }
}

// Call the function initially and whenever the window is resized
adjustMenuItems();
window.addEventListener('resize', adjustMenuItems);
