document.addEventListener('DOMContentLoaded', () => {


/*SHOW MENU*/ 
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

/*Menu Show*/

if(navToggle) {
   navToggle.addEventListener('click', () => {
     navMenu.classList.add('show-menu')
   })
}

/*Menu Hidden*/

if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*Remove mobile menu*/

const navLink = document.querySelectorAll(".nav-link");

const linkAction = () =>{
  const  navMenu = document.getElementById('nav-menu');
  /*Remove the menu when link is clicked */
  navMenu.classList.remove('show-menu')
}

navLink.forEach(l => l.addEventListener('click' , linkAction))








})