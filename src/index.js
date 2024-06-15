import _ from 'lodash'
import './style.css';

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

    let projectTitle = document.getElementsByClassName('project-btn-name')[0];

    proj_header.textContent = projectTitle.textContent;

});
