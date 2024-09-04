// Project Data Structure
const projects = [
    {
        "title": "senna1633.github.io",
        "description": "A customizable template to help you build and launch your own personal website effortlessly.",
        "link": "https://github.com/senna1633/senna1633.github.io"
    },    
    {
        "title": "Project 2",
        "description": "An advanced project featuring innovative functionalities, designed to streamline tasks and solve real-world problems. Ideal for users who need efficient, modern solutions.",
        "link": "https://github.com/yourusername/project2"
    },
    {
        "title": "Project 3",
        "description": "This project demonstrates unique approaches to complex challenges, offering creative solutions that highlight a range of technical skills and design thinking.",
        "link": "https://github.com/yourusername/project3"
    }    
];

// Function to render projects dynamically
function renderProjects() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View on GitHub</a>
        `;

        projectList.appendChild(projectCard);
    });
}

// Call the function to display projects
renderProjects();
