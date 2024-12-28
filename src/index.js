import _ from 'lodash'
import './style.css';

import Project from './functions/projects';
import addButton from './functions/addButton';
import addTask from './functions/addTask';
import populateData from './functions/populateData';

let proj_header = document.getElementById('projName');

let allTasks = [];
let allDates = [];
let allProjects = [];

let projID = 4;
let taskID = 4;

function component() {

    const element = document.createElement('div');
  
    return element;
  
}

document.body.appendChild(component());

populateData(allProjects, "default");


document.getElementById('homeBtn').addEventListener('click', () => {

    proj_header.textContent = "All Tasks";

    let allTasks = proj_header.textContent;

    populateData(allProjects, allTasks);

});

document.getElementById('allProjsBtn').addEventListener('click', () => {

    proj_header.textContent = "All Projects";

});

document.addEventListener('click', function(e) {

    let projTitle = "";

    if(e.target && e.target.id == 'projDeleteBtn') {

        let projTitleIndex = e.target.parentElement.parentElement.textContent;
        e.target.parentElement.parentElement.remove();

        //console.log(projTitleIndex);

        //const projIndex = allProjects.indexOf(projTitleIndex);
        //allProjects.splice(projIndex, 1);

        //console.log(allProjects);
    }

    if(e.target && e.target.id== 'taskDeleteBtn') {

        let currTaskIndex = e.target.parentElement.parentElement.id;
        currTaskIndex = Number(currTaskIndex);
        e.target.parentElement.parentElement.remove();

        console.log(currTaskIndex);

        allProjects = allProjects.filter(item => item.taskID !== currTaskIndex);

        console.log(allProjects);
    }

    if(e.target && e.target.id== 'projBtn') {

        projTitle = e.target.textContent; //edit the text to be appended as text content of the button instead of inside a span element
        console.log(projTitle);
        proj_header.textContent = projTitle;

        populateData(allProjects, projTitle);
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

    const nextProject = new Project(projectName, projID, "Task", taskID, "8/23/24");

    allProjects.push(nextProject);
    console.log(allProjects);

    projID++;
    taskID++;

    let projectButtonList = document.getElementById('projList');

    projectButtonList.appendChild(addButton(projectName));

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

    let taskList = document.getElementById('tsk-lst');

    let currentProj = proj_header.textContent;

    //Get Current Date & Format It

    let newDate = new Date();
    let yourDate = newDate.toISOString().split('T')[0];

    console.log(yourDate);

    taskList.appendChild(addTask(taskDescription, yourDate, taskID));

    allProjects.push(
        {title: currentProj, projID: projID, task: taskDescription, taskID: taskID, date: yourDate }
    );

    taskID++;
        
    console.log(allProjects);

});

document.addEventListener("change", function(e) {

    if (e.target.id == "dateInput") {

        let input = e.target.value;
        console.log(input);

        let dateTaskID = e.target.parentElement.parentElement.id;
        dateTaskID = Number(dateTaskID);
        console.log(dateTaskID);
    
    
        allProjects = allProjects.map(obj => {
    
            if (obj.taskID === dateTaskID) {
    
                return { ...obj, date: input};
            }
            return obj;
        });
    
        console.log(allProjects);
    }


    if (e.target.id == "taskCheckBox" && e.target.checked) {

        console.log("Checked");

        e.target.parentElement.parentElement.classList.toggle("task-complete");
    }
    else if (e.target.id == "taskCheckBox" && e.target.checked == false) {

        e.target.parentElement.parentElement.classList.toggle("task-complete");
    }


});


//Get current project ID for when task is deleted
//Get status of tasks from checkboxes
//Set local storage
