// UI vars
const form = document.querySelector('.form');
const email = document.querySelector('#mail');
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control erorr';
    const small =formControl.querySelector('small');
    small.innerText = message;
  }
// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      alert('successs');
    }else{
      showError(input, 'Email is not valid');
    }
  }
form.addEventListener('submit', function(){
    checkEmail(email);
     email.value = ''
});


