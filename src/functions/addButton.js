export default function addButton(projectName) {

    let projTitle = projectName;

    //console.log(projTitle);

    let newButton = document.createElement('button');

    newButton.classList.add("project-button");
    newButton.setAttribute("id", "projBtn");

    let leftElements = document.createElement('div');
    leftElements.classList.add("proj-btn-left");

    let leftIcon = document.createElement('i');
    leftIcon.classList.add("fas", "fa-tasks");

    let buttonText = document.createElement('span');
    buttonText.classList.add("project-btn-name");
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
