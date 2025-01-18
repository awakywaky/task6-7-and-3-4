document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".navbar__menu-button");
  const menu = document.querySelector(".navbar__menu");

  menuButton.addEventListener("mouseenter", () => {
    menu.classList.add("navbar__menu--visible");
  });

  menu.addEventListener("mouseleave", () => {
    menu.classList.remove("navbar__menu--visible");
  });

  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
      menu.classList.remove("navbar__menu--visible");
    }
  });

  const dropdowns = document.querySelectorAll(".navbar__dropdown");

  dropdowns.forEach((dropdown) => {
    const submenu = dropdown.querySelector(".navbar__submenu");

    dropdown.addEventListener("mouseenter", () => {
      submenu.classList.add("navbar__submenu--visible");
    });

    dropdown.addEventListener("mouseleave", () => {
      submenu.classList.remove("navbar__submenu--visible");
    });
  });
});
