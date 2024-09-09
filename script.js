// Project Data Structure
const projects = [
    {
        "title": "senna1633.github.io",
        "description": "A customizable template to help you build and launch your own personal website effortlessly.",
        "link": "https://github.com/senna1633/senna1633.github.io",
        "image": "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?resize=1280,853"  // Placeholder image or actual image URL
    },
    {
        "title": "Project 2",
        "description": "An advanced project featuring innovative functionalities, designed to streamline tasks and solve real-world problems. Ideal for users who need efficient, modern solutions.",
        "link": "https://github.com/yourusername/project2",
        "image": null  // No image provided
    },
    {
        "title": "Project 3",
        "description": "This project demonstrates unique approaches to complex challenges, offering creative solutions that highlight a range of technical skills and design thinking.",
        "link": "https://github.com/yourusername/project3",
        "image": "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?resize=1280,853"  // No image provided
    }
];

function renderProjects() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        // Check if the project has an image and include it if it exists
        const imageHTML = project.image ? `<img src="${project.image}" alt="${project.title} Image" class="project-image">` : '';

        projectCard.innerHTML = `
            ${imageHTML}
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View on GitHub</a>
        `;

        projectList.appendChild(projectCard);
    });
}

renderProjects();
