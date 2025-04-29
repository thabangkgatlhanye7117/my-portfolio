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
/*shadow header */

const shadowHeader = () => {

      const header = document.getElementById('header');

      this.scrollY >= 50 ? header.classList.add('shadow-header')
                           :header.classList.remove('shadow-header')
    
}
window.addEventListener('scroll', shadowHeader);

/*Email*/
const contactForm = document.getElementById('contact-form')

/*SHOW SCROLL UP*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
} 
window.addEventListener('scroll', scrollUp);

/*Scroll sections active link */

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 68,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector(".nav-menu a[href*=" + sectionId + ']');
    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })

}
window.addEventListener('scroll', scrollActive)

/*Dark Light Theme */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

//We validate if the user previously chose a topic

if(selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'] (iconTheme)
}

//Activate/Deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  //Add or Remove the dark/icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

//Scroll reveal animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true // Animations repeat
})
sr.reveal(`.home-profile, .about-image, .contact-mail`, {origin:'right'})
sr.reveal(`.home-name, .home-info, .about-container .section-title-1, .about-info, .contact-social, .contact-data`, {origin:'left'})
sr.reveal(`.services-card, .projects-card`, {interval: 100})




})