const email = document.getElementById('email');
const form = document.getElementById('form');
const mobileToggle = document.querySelector('.btn_toggle_nav');
const menu = document.querySelector('.nav_main ul');
const anchors = menu.querySelectorAll('li > a');

form.addEventListener('submit', (e) => {
  e.preventDefault();
    // If an email is not entered before "sumbit" is clicked
  if (email.value == ''){
    // Alert will pop up stating below text
    alert("Please Enter an Email.")
  } else {
    // If email is present console will collect data
    console.dir(email.value);
    alert(`We will be sending updates to ${email.value}`)
    email.value = '';
  }
});


   // Responsive menu
mobileToggle.addEventListener('click', (e) => {
   // Logging event in the Console
  console.log(e);
   // toggling the CSS active class on .nav_main ul
  menu.classList.toggle('active');
});

anchors.forEach(anchor => {
   // Adding click lister to every Anchor
  anchor.addEventListener('click', (e) => {
    // removing the CSS active class from .nav_main ul on click
    menu.classList.remove('active');
  });
})
