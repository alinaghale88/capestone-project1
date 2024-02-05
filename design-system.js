function showNav() {
    var element1 = document.getElementsByClassName("top-navbar");
    var element2 = document.getElementsByClassName("side-navbar");
    for (var i = 0; i < element1.length; i++) {
      element1[i].classList.toggle("show-items");
  }
  for (var i = 0; i < element2.length; i++) {
      element2[i].classList.toggle("navbar--show-items");
  }
  }