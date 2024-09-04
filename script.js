// Project Data Structure
const projects = [
    {
        title: "Project 1",
        description: "This is a description of Project 1. It is a simple but effective project.",
        link: "https://github.com/yourusername/project1"
    },
    {
        title: "Project 2",
        description: "This is a description of Project 2. It's a cool project with advanced features.",
        link: "https://github.com/yourusername/project2"
    },
    {
        title: "Project 3",
        description: "This is a description of Project 3. It showcases some unique skills.",
        link: "https://github.com/yourusername/project3"
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
