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