let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let top = window.scrollY;
  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      sec.classList.add("visible");

      navLinks.forEach((link) => {
        link.classList.remove("active");
        document.querySelector(`header nav a[href*="${id}"]`).classList.add("active");
      });
    } else {
      sec.classList.remove("visible");
    }
  });
};

// Run once on page load
window.onscroll();

// Proper place for menu toggle
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
