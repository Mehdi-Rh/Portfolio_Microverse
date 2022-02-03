// Style of the Warning isinside the styles/mobile.css file
const email = document.getElementById('email');
const form = document.getElementById('contacts');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (event) => {
  let messages = [];
  if (email.value !== email.value.toLowerCase()) {
    messages.push('The email is not valid, email charachters should be lowercase');
  }

  if (messages.length > 0) {
    event.preventDefault();
    errorElement.innerText = messages.join(', ');
    errorElement.style.display = ('flex');
  } else {
    errorElement.style.display = ('none');
  }
})
