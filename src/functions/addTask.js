import newTask from "./tasks";

export default function addTask(taskDesc) {

    let taskDescription = newTask(taskDesc);

    let newButton = document.createElement('button');

    newButton.classList.add("button-task", "btn", "btn-light");

    let leftElements = document.createElement('div');
    leftElements.classList.add("left-task-panel", "form-check");

    let leftInput = document.createElement('input');
    leftInput.classList.add("form-check-input");
    leftInput.setAttribute("type", "checkbox");

    let leftDesc = document.createElement('p');
    leftDesc.classList.add("task-content");
    leftDesc.textContent = taskDescription;

    leftElements.appendChild(leftInput);
    leftElements.appendChild(leftDesc);

    newButton.appendChild(leftElements);

    let rightElements = document.createElement('div');
    rightElements.classList.add("right-task-panel");

    let rightInput = document.createElement('input');
    rightInput.setAttribute("type", "date");
    rightInput.setAttribute("name", "");
    rightInput.setAttribute("id", "");

    let rightDesc = document.createElement('p');
    rightDesc.classList.add("task-date");

    rightElements.appendChild(rightDesc);
    rightElements.appendChild(rightInput);

    newButton.appendChild(rightElements);

    return newButton;
}