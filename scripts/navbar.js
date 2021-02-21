const hamburgerButton = document.getElementById("toggle-button");
const navLinks = document.getElementById("nav-links");

hamburgerButton.addEventListener('click', () => navLinks.classList.toggle("active"));