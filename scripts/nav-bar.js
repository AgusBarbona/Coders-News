//elementos => nav and buttons
const nav = document.querySelector('#nav');
const open = document.querySelector('#open');
const close = document.querySelector('#close');

//Adding class
open.addEventListener('click', () => {
    nav.classList.add('visible');
});

//remove class
close.addEventListener('click', () => {
    nav.classList.remove('visible');
});