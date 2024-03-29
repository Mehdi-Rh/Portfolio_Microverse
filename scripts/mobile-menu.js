/* ------------- Mobile Menu ------------- */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const headline = document.querySelector('.headline');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  headline.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  headline.classList.remove('active');
}));
/* -------------------------------------------- */
