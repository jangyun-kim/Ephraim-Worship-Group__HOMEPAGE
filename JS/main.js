/* EXPANDER MENU */
const showMenu = (toggleId, navbarId, bodyId) => {
  const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId);

  if (toggle && navbar) {
    toggle.addEventListener("click", () => {
      navbar.classList.toggle("expander");
      bodypadding.classList.toggle("body-pd");
      document.body.classList.toggle("nav-open");
    });
  }
};

showMenu("nav-toggle", "navbar", "body-pd");

/* LINK ACTIVE */
const linkColor = document.querySelectorAll(".nav__link");
function colorLink() {
  linkColor.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");
}
linkColor.forEach((l) => l.addEventListener("click", colorLink));

/* COLLAPSE MENU */
const linkCollapse = document.querySelectorAll(".nav__link");

linkCollapse.forEach(function (link) {
  link.addEventListener("click", function () {
    const collapseMenu = this.querySelector(".collapse__menu");
    collapseMenu.classList.toggle("showCollapse");

    const rotate = this.querySelector(".collapse__link");
    rotate.classList.toggle("rotate");
  });
});
