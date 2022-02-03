// Style of the Warning isinside the styles/mobile.css file
const email = document.getElementById('email');
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

// export { email, form };

const userName = document.getElementById('name');
const message = document.getElementById('message');

let data = {
  userName: '',
  email: '',
  message: '',
};

if (localStorage.getItem('data') != null) {
  data = JSON.parse(localStorage.getItem('data'));
  userName.value = data.userName;
  email.value = data.email;
  message.value = data.message;
}

form.addEventListener('change', (e) => {
  e.preventDefault();
  data.userName = userName.value;
  data.email = email.value;
  data.message = message.value;
  localStorage.setItem('data', JSON.stringify(data));
});