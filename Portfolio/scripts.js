const projectDetails = {
    project1: {
        title: 'Project 1',
        description: 'Detailed description of project 1.'
    },
    project2: {
        title: 'Project 2',
        description: 'Detailed description of project 2.'
    }
};

function showDetails(project) {
    document.getElementById('details-title').innerText = projectDetails[project].title;
    document.getElementById('details-description').innerText = projectDetails[project].description;
    document.getElementById('project-details').style.display = 'block';
}

function hideDetails() {
    document.getElementById('project-details').style.display = 'none';
}