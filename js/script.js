let loginForm = document.querySelector('.login-form');

document.querySelector('#login').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () => {
    loginForm.classList.toggle('active');
}

openType('sachnganh');

function openType(value) {
    var i, sach, opt;
    sach = document.getElementsByClassName('sach');
    for (i = 0; i < sach.length; i++) {
        sach[i].style.display = "none";
    }
    document.getElementById(value).style.display = "block";
}