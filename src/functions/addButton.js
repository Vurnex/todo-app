import newProject from "./projects";

export default function addButton(projectName) {

    let projTitle = newProject(projectName);

    //console.log(projTitle);

    let newButton = document.createElement('button');

    newButton.classList.add("project-button");
    //newButton.textContent = "New Button";

    let leftElements = document.createElement('div');
    leftElements.classList.add("proj-btn-left");

    let leftIcon = document.createElement('i');
    leftIcon.classList.add("fas", "fa-tasks");

    let buttonText = document.createElement('span');
    buttonText.classList.add("project-btn-name");
    //buttonText.textContent = "Test New Project Button";
    buttonText.textContent = projTitle;

    leftElements.appendChild(leftIcon);
    leftElements.appendChild(buttonText);

    newButton.appendChild(leftElements);

    let rightElements = document.createElement('div');
    rightElements.classList.add("proj-btn-right");

    let rightIcon = document.createElement('i');
    rightIcon.classList.add("fas", "fa-times");
    rightIcon.setAttribute("id", "projDeleteBtn");

    rightElements.appendChild(rightIcon);

    newButton.appendChild(rightElements);



    return newButton;
}