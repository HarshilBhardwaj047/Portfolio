// Select the nav links
const navLinks = document.querySelectorAll('nav ul li a');

// Add a click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Smoothly scroll to the section with the corresponding ID
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

//slider
const projectSlider = document.querySelector('.project-slider ul');
const projectSlides = document.querySelectorAll('.project-slider li');

let slideIndex = 0;

function slideProjects() {
  if (slideIndex === projectSlides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  
  projectSlider.style.transform = `translateX(-${slideIndex * projectSlides[0].offsetWidth}px)`;
}

setInterval(slideProjects, 5000);


// Select the form and add a submit event listener
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Get the values of the input fields
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  // Use a service like Formspree to submit the form data via email
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('message', message);
  fetch('https://formspree.io/your_email_address_here', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      alert('Thank you for your message! I will get back to you soon.');
    } else {
      alert('Oops! There was a problem submitting your form.');
    }
  })
  .catch(error => {
    console.error(error);
  });
});
