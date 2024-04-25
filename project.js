
class Project {
    constructor(title, description, image){
        this.title = title;
        this.description = description;
        this.image = image;
    }
}

const addProjectList = (data) => {
    var projects = document.getElementById('projects')

    for (var i = 0; i < data.length; i++){
        var sec =     
        `<h2>${data[i].title}</h2>
            <p>${data[i].description}</p>
            <figure id="dataprojects">
                <div>
                    <img src="${data[i].image}" alt="" />
                </div>
            </figure>`
            projects.innerHTML += sec
    }
}

const apiProjects = [];

fetch('https://zoocrmapi.azurewebsites.net/projects')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
        const newProject = new Project(element['title'], element['description'], element['image'] );
        console.log(element);
            apiProjects.push(newProject); 
    });
    addProjectList(apiProjects);
  })
  .catch(error => console.error('Error fetching zoo projects:', error));
  console.log(apiProjects); 