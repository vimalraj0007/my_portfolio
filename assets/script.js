// show menu
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// menu show
// validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

// menu hidden
// validate if constant exists
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

// remove me nu
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));



// active link
const navlink = document.querySelectorAll('.nav__link');

function activelink(){
    navlink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}


navlink.forEach((a) => a.addEventListener('click', activelink));

function scrollHeader(){
    // background header
const header = document.getElementById('header');
//when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');

}

window.addEventListener('scroll',scrollHeader);


// Mixitup filter
var mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 300
    }
});

// active work

const linkwork = document.querySelectorAll('.category__btn');

function activeWork(){
    linkwork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}


linkwork.forEach((a) => a.addEventListener('click', activeWork));

// contact form

const contactForm = document.getElementById('contact-form');
  const contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'), 
message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    //check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || message.value === '') {
        //add and remove color
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        //show message
        contactMessage.textContent = 'Write all fields';
    } else {
        //serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_e1g5usz', 'template_90gxd6n', '#contact-form', '9dhn-i_p-FiZvYaFG').then(() => {
            //show message and add color , window + dot to open emoji
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Message sent successfully ✅'; 

            //remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
    },
     (error)=>{
        alert('Ooops! Something has gone wrong', error);
    }
    );
     //clear input fields
     contactName.value = '';
     contactEmail.value = '';
     message.value = '';
    }
};


contactForm.addEventListener('submit', sendEmail);


// // navbar
// const navToggle = document.getElementById('nav-toggle');
// const navMenu = document.getElementById('nav-menu');
// const navClose = document.getElementById('nav-close');

// navToggle.addEventListener('click', () => {
//     navMenu.classList.toggle('active');
//     navClose.classList.toggle('active');
// });

// style switcher
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
const styleSwitcher = document.querySelector('.style-switcher');

console.log(styleSwitcherToggle); // should log the element or null
console.log(styleSwitcher); // should log the element or null

styleSwitcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open');
});

// hidden switcher on scroll
window.addEventListener('scroll', () => {
    if (styleSwitcher.classList.contains('open')){
        styleSwitcher.classList.remove('close');
    }
})

const alternateStyles = document.querySelectorAll('alternate-style');

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled') = false;
        } else {
            style.setAttribute('disabled', 'true') = true;
        }
    })
}