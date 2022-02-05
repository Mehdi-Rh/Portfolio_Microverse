// Style of the Warning isinside the styles/mobile.css file
const email = document.getElementsByClassName('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (event) => {
  const messages = ['The email is not valid, email charachters should be lowercase'];

  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    errorElement.innerText = messages.join(', ');
    errorElement.style.display = ('flex');
  } else {
    errorElement.style.display = ('none');
  }
});
