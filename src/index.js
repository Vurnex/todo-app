import _ from 'lodash'
import './style.css';

import newProject from './functions/projects';
import addButton from './functions/addButton';

let proj_header = document.getElementById('projName');

function component() {

    const element = document.createElement('div');
  
    return element;
  
}

document.body.appendChild(component());



document.getElementById('inboxBtn').addEventListener('click', () => {

    proj_header.textContent = "Inbox";

});

document.getElementById('todayBtn').addEventListener('click', () => {

    proj_header.textContent = "Today";

});

document.getElementById('thisWeekBtn').addEventListener('click', () => {

    proj_header.textContent = "This Week";

});

document.getElementById('projBtn').addEventListener('click', () => {

    //let projectTitle = document.getElementsByClassName('project-btn-name')[0];

    //projectTitle.textContent = newProject();

    //proj_header.textContent = projectTitle.textContent;

});

document.getElementById('projDeleteBtn').addEventListener('click', () => {

    document.querySelector('.project-button').remove();

});

document.getElementById('add-proj-btn').addEventListener('click', () => {

    document.getElementById('add-proj-popup').style.display = 'inherit';

});

document.getElementById('btn-cancel-proj-popup').addEventListener('click', () => {

    document.getElementById('add-proj-popup').style.display = 'none';

});

document.getElementById('btn-add-proj-popup').addEventListener('click', () => {


    let projectName = document.getElementById('input-add-project-popup').value;

    let projectButtonList = document.getElementById('projList');

    projectButtonList.appendChild(addButton());

    console.log(newProject(projectName));
});
