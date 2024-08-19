import _ from 'lodash'
import './style.css';

import newProject from './functions/projects';
import addButton from './functions/addButton';
import addTask from './functions/addTask';

let proj_header = document.getElementById('projName');

let allTasks = [];
let allProjects = [];

function component() {

    const element = document.createElement('div');
  
    return element;
  
}

document.body.appendChild(component());



document.getElementById('homeBtn').addEventListener('click', () => {

    proj_header.textContent = "All Tasks";

});

document.getElementById('allProjsBtn').addEventListener('click', () => {

    proj_header.textContent = "All Projects";

});

document.addEventListener('click', function(e) {

    let projTitle = "";

    if(e.target && e.target.id== 'projDeleteBtn') {
        
        let projTitleIndex = e.target.parentElement.parentElement.textContent;
        e.target.parentElement.parentElement.remove();

        console.log(projTitleIndex);

        const projIndex = allProjects.indexOf(projTitleIndex);
        allProjects.splice(projIndex, 1);

        console.log(allProjects);
    }

    if(e.target && e.target.id== 'taskDeleteBtn') {
        e.target.parentElement.parentElement.remove();
    }

    if(e.target && e.target.id== 'projBtn') {

        projTitle = e.target.textContent;
        console.log(projTitle);
        proj_header.textContent = projTitle;
    }
 });

document.getElementById('add-proj-btn').addEventListener('click', () => {

    document.getElementById('add-proj-popup').style.display = 'inherit';

});

document.getElementById('btn-cancel-proj-popup').addEventListener('click', () => {

    document.getElementById('add-proj-popup').style.display = 'none';
    document.getElementById('input-add-project-popup').value = '';

});

document.getElementById('btn-add-proj-popup').addEventListener('click', () => {


    let projectName = document.getElementById('input-add-project-popup').value;

    allProjects.push(projectName);
    console.log(allProjects);

    let projectButtonList = document.getElementById('projList');

    projectButtonList.appendChild(addButton(projectName));

    //console.log(newProject(projectName));
});

document.getElementById('add-tsk-btn').addEventListener('click', () => {

    document.getElementById('add-tsk-popup').style.display = 'inherit';

});

document.getElementById('btn-cancel-tsk-popup').addEventListener('click', () => {

    document.getElementById('add-tsk-popup').style.display = 'none';
    document.getElementById('input-add-tsk-popup').value = '';

});

document.getElementById('btn-add-tsk-popup').addEventListener('click', () => {

    let taskDescription = document.getElementById('input-add-tsk-popup').value;

    allTasks.push(taskDescription);
    console.log(allTasks);

    let taskList = document.getElementById('tsk-lst');

    taskList.appendChild(addTask(taskDescription));

});

document.getElementById("dateInput").addEventListener("change", function() {
    var input = this.value;
    var dateEntered = new Date();
    console.log(input); //e.g. 2015-11-13
    console.log(dateEntered); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)
});

// Get date from date input

//Populate project preview with projects and tasks
