const email = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.dir(email.value);
})
