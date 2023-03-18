// Togle class active //

const navbarNav = document.querySelector(".navbar-nav");
// ketika baju menu di klik //
document.querySelector("#baju-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// kilk di luar side bar untuk hilang nav

const baju = document.querySelector("#baju-menu");

document.addEventListener("click", function (e) {
  if (!baju.contains(e.target) & !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
