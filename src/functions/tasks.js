class Task {

    constructor(description) {

        this.description = description;

    }

}

export default function newTask(taskDesc) {

    let taskDescription = taskDesc;

    const newTask = new Task(taskDescription);

    console.log(newTask.description);

    return newTask.description;

}