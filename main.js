// Sourced from ChatGPT

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

// Code to set the active state
const navLinks = document.querySelectorAll(".c-nav-menu__link"); // Get all navigation links

const currentPageUrl = window.location.href; // Get the current page URL

navLinks.forEach((link) => {
  // Check if the link href matches the current page URL
  if (link.href === currentPageUrl && !link.href.includes("#")) {
    // Add a class to mark it as active
    link.classList.add("link--active");
  }
});

// Code to handle dropdown toggle in navigation menu
function toggleDropdown() {
  var dropdownMenu = document.getElementById("resourcesDropdown");
  if (window.innerWidth < 1200) {
    // Adjust the screen width according to your mobile breakpoint
    if (
      dropdownMenu.style.display === "none" ||
      dropdownMenu.style.display === ""
    ) {
      dropdownMenu.style.display = "block";
    } else {
      dropdownMenu.style.display = "none";
    }
  }
}

// Function to show the notice section when the page loads
document.addEventListener("DOMContentLoaded", function () {
  var noticeSection = document.getElementById("noticeSection");
  var dropdownButton = document.getElementById("dropdownButton");

  noticeSection.style.display = "block"; // Display the notice section
  dropdownButton.style.display = "none"; // Hide the toggle button
});

// Function to toggle the visibility of the notice section
function toggleNotice() {
  var noticeSection = document.getElementById("noticeSection");
  var dropdownButton = document.getElementById("dropdownButton");

  if (
    noticeSection.style.display === "none" ||
    noticeSection.style.display === ""
  ) {
    noticeSection.style.display = "block"; // Show the notice section
    dropdownButton.style.display = "none"; // Hide the toggle button
  } else {
    noticeSection.style.display = "none"; // Hide the notice section
    dropdownButton.style.display = "block"; // Show the toggle button
  }
}

// Function to hide the notice section and show the toggle button
function hideNotice() {
  var noticeSection = document.getElementById("noticeSection");
  var dropdownButton = document.getElementById("dropdownButton");

  noticeSection.style.display = "none"; // Hide the notice section
  dropdownButton.style.display = "block"; // Show the toggle button
}

// Code for the hero section slider
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".c-slider__slide");
  const dotsContainer = document.querySelector(".c-slider__navigation");
  const dots = [];

  let currentIndex = 0;
  let interval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
    });

    dots.forEach((dot, i) => {
      dot.classList.remove("c-slider__slide--active");
      if (i === index) {
        dot.classList.add("c-slider__slide--active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  interval = setInterval(nextSlide, 3000);

  slides.forEach((slide, i) => {
    const dot = document.createElement("div");
    dot.classList.add("c-slider__navigation-dot");
    if (i === 0) {
      dot.classList.add("c-slider__slide--active");
    }
    dot.addEventListener("click", () => {
      clearInterval(interval);
      currentIndex = i;
      showSlide(currentIndex);
      interval = setInterval(nextSlide, 3000);
    });
    dotsContainer.appendChild(dot);
    dots.push(dot);
  });
});

// Code for the Gift card section
document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".c-gift-section-steps");
  let currentStep = 0;

  function showStep(stepIndex) {
    steps.forEach((step, index) => {
      if (index === stepIndex) {
        step.style.display = "block";
      } else {
        step.style.display = "none";
      }
    });
  }

  function updatePaginationLinks() {
    const prevLink = document.getElementById("prev");
    const nextLink = document.getElementById("next");

    if (currentStep === 0) {
      prevLink.style.display = "none";
    } else {
      prevLink.style.display = "inline";
    }

    if (currentStep === steps.length - 1) {
      nextLink.style.display = "none";
    } else {
      nextLink.style.display = "inline";
    }
  }

  function goToNextStep() {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
      updatePaginationLinks();
    }
  }

  function goToPrevStep() {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
      updatePaginationLinks();
    }
  }

  const nextLink = document.getElementById("next");
  const prevLink = document.getElementById("prev");

  nextLink.addEventListener("click", function (event) {
    event.preventDefault();
    goToNextStep();
  });

  prevLink.addEventListener("click", function (event) {
    event.preventDefault();
    goToPrevStep();
  });

  showStep(currentStep);
  updatePaginationLinks();
});

// JavaScript for FAQ accordion
const accordions = document.querySelectorAll(".c-faq-accordion");

accordions.forEach((accordion) => {
  const header = accordion.querySelector(".c-faq-question");
  const content = accordion.querySelector(".c-faq-answer");
  const icon = accordion.querySelector(".c-faq__icon");

  icon.addEventListener("click", () => {
    // Toggle the accordion content
    content.style.display =
      content.style.display === "block" ? "none" : "block";

    // Toggle the icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");
  });
});


// Function to reset navigation menu state when screen size changes
function resetNavMenu() {
  var dropdownMenu = document.getElementById("resourcesDropdown");
  var toggleButton = document.getElementById("toggleButton");

  if (window.innerWidth >= 1200) { // Adjust the screen width according to your desktop breakpoint
    // Reset dropdown menu state
    dropdownMenu.style.display = "none";
    // Reset toggle button state
    toggleButton.style.display = "none";
  } else {
    // Reset toggle button state
    toggleButton.style.display = "block";
  }
}

// Call resetNavMenu when the window is resized
window.addEventListener("resize", resetNavMenu);