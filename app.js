
const toggleInput = document.querySelector('input');
const body = document.querySelector('body');
const menuIcon = document.querySelector('.menu svg');
const navlinks = document.querySelector('.navlinks');
let changeIcon = document.querySelector('#icon');

menuIcon.addEventListener('click',() => {
     navlinks.classList.toggle('active-nav')
})

toggleInput.addEventListener('change',() => {
     body.classList.toggle('active')
     if(body.classList.contains('active')){
          changeIcon.src = 'moon.svg'
     }
     else{
          changeIcon.src = 'sun.svg'
     }
})