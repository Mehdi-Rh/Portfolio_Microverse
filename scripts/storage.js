import { form, email } from 'validateForm.js';
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