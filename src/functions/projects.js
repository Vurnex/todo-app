class Project {

    constructor(title) {

        this.title = title;

    }

}

//let projectList = [];

export default function newProject(projectName) {

    let projectTitle = projectName;

    const newProject = new Project(projectTitle);

    //projectList.push(newProject);

    console.log(newProject.title);

    return newProject.title;

}