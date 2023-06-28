const toggleBtn = document.querySelector(".toggle-btn");
const navList = document.querySelector(".nav-list");
const videoContainer = document.querySelector(".video-container");
const navbar = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-list a");
const serviceTpyes = document.querySelector(".service-types");
toggleBtn.addEventListener("click", () => {
  navList.classList.toggle("show-nav-list");
});
window.addEventListener("scroll", () => {
  if (window.scrollY > "67.65") {
    navbar.style.background = "var(--grey-600)";
    navbar.style.boxShadow = "var(--shadow-4)";
  } else {
    navbar.style.background = "transparent";
    navbar.style.boxShadow = "none";
  }
});
navList.addEventListener("click", (e) => {
  if (
    (e.target.textContent === "home" ||
      e.target.textContent === "about" ||
      e.target.textContent === "contact") &&
    document.title === "Homodeus Fitness"
  ) {
    e.preventDefault();
    const section = document.getElementById(e.target.textContent);
    if (window.innerWidth < "950") {
      const y =
        section.getBoundingClientRect().y -
        navbar.getBoundingClientRect().height +
        navList.getBoundingClientRect().height;
      window.scrollBy(0, y);
    } else {
      const y =
        section.getBoundingClientRect().y -
        navbar.getBoundingClientRect().height;
      window.scrollBy(0, y);
    }
  }
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("show-nav-list");
  });
});

window.addEventListener("DOMContentLoaded", () => {
  navList.classList.remove("show-nav-list");
});
