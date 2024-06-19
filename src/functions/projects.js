class Project {

    constructor(title) {

        this.title = title;

    }

}

export default function project() {

    let projectTitle = "testClass";

    const newProject = new Project(projectTitle);

    return newProject.title;

}