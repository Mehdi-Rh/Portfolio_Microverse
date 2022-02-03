import { form, email } from './validateForm.js';

const name = document.getElementById('name');
const message = document.getElementById('message');

let data = {
  name: '',
  email: '',
  message: '',
};

if (localStorage.getItem(data) != null) {
  data = JSON.parse(localStorage.getItem('data'));
  name.value = data.name;
  email.value = data.email;
  message.value = data.message;
}

form.addEventListener('change', (e) => {
  e.preventDefault();
  data.name = name.value;
  data.email = email.value;
  data.message = message.value;
  localStorage.setItem('data', JSON.stringify(data));
});