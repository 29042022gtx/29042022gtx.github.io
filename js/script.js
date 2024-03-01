let loginForm = document.querySelector('.login-form');

document.querySelector('#login').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () => {
    loginForm.classList.toggle('active');
}