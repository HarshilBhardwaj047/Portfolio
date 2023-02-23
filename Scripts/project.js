// Get references to the DOM elements
const projectImage = document.querySelector('#project-image');
const projectTitle = document.querySelector('#project-title');
const projectDescription = document.querySelector('#project-description');
const projectLink = document.querySelector('#project-link');

// Define the project data
const projects = [
  {
    title: 'Project 1',
    image: 'project1.jpg',
    description: 'This is the first project.',
    link: 'https://www.project1.com'
  },
  {
    title: 'Project 2',
    image: 'project2.jpg',
    description: 'This is the second project.',
    link: 'https://www.project2.com'
  },
  {
    title: 'Project 3',
    image: 'project3.jpg',
    description: 'This is the third project.',
    link: 'https://www.project3.com'
  }
];

// Get the selected project from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const selectedProjectIndex = urlParams.get('project') - 1;
const selectedProject = projects[selectedProjectIndex];

// Update the DOM with the selected project data
projectTitle.textContent = selectedProject.title;
projectImage.src = selectedProject.image;
projectDescription.textContent = selectedProject.description;
projectLink.href = selectedProject.link;
