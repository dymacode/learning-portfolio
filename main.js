
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

    sections.forEach(sec => {
        let top = sec.offsetTop - 150;
        let bottom = top + sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < bottom) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', scrollPosition > 100);

    // Make sure to remove 'fa-xmark' from menuIcon if not needed
    if (scrollPosition <= 100) {
        menuIcon.classList.remove('fa-xmark');
    }

    navbar.classList.remove('active');
});

//Scroll Reveal

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'button'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

//TYPED JS
const typed= new Typed('.multiple-text',{
    strings: ['Frontend Developer', 'Cloud Engineer', 'Customer Service','Frontend Developer' ],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
})
