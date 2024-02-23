/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)



/*=============== SWIPER FAVORITES ===============*/ 
let SwiperFavorite = new Swiper(".favorite__swiper", {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    grabCursore: true,

    breakpoints:{
        768:{
            slidesPerView: 3,
        }
    }
});


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true , //Animations repeat
})

sr.reveal('.home__social, .favorite__container')
sr.reveal('.home__img', {origin: 'bottom'})
sr.reveal('.home__button', {origin: 'bottom', duration: 2700, delay: 500})
sr.reveal('.home__tooltip', {origin: 'top', duration: 2700, delay: 500})
sr.reveal('.about__img', {origin: 'right', duration: 2700, delay: 500, distance:'100px'})

sr.reveal('.model__tooltip-1', {origin: 'right', duration: 2700, delay: 500, distance:'100px'})
sr.reveal('.model__tooltip-2', {origin: 'right', duration: 2700, delay: 500, distance:'100px'})
sr.reveal('.model__tooltip-3', {origin: 'right', duration: 2700, delay: 500, distance:'100px'})
sr.reveal('.model__tooltip-4', {origin: 'right', duration: 2700, delay: 500, distance:'100px'})
