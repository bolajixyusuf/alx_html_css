document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menuBar = document.getElementById("menu_bar");

  menuToggle.addEventListener("click", function () {
    menuBar.classList.toggle("show");
  });
})