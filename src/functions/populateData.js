import addTask from "./addTask";
import addButton from "./addButton";
import Project from "./projects";

export default function populateData(allProjects, selectedProj) {
    
    let taskList = document.getElementById('tsk-lst');
    taskList.replaceChildren();

    if (selectedProj == "default") {

        allProjects.push( //Populate with example tasks
            {title: "Project 1", projID: 1, task: "New Pre Task", taskID: 1, date: "2024-08-24", status: false},
            {title: "Project 2", projID: 2, task: "New Pre Task 2", taskID: 2, date: "2024-08-25", status: false},
            {title: "Project 3", projID: 3, task: "New Pre Task 3", taskID: 3, date: "2024-08-26", status: false}
        );


    };

    
    allProjects.forEach(function (arrayItem) {

        if (arrayItem.title == selectedProj) {

            let projTitle = arrayItem.title;
            let taskDesc = arrayItem.task;
            let taskDate = arrayItem.date;
            let taskID = arrayItem.taskID;
            let taskStatus = arrayItem.status;
    
            //let projectButtonList = document.getElementById('projList');
    
            //projectButtonList.appendChild(addButton(projTitle));
        
            taskList.appendChild(addTask(taskDesc, taskDate, taskID, taskStatus));

        }
        else if (selectedProj == "default" || selectedProj == "All Tasks") {

            let projTitle = arrayItem.title;
            let taskDesc = arrayItem.task;
            let taskDate = arrayItem.date;
            let taskID = arrayItem.taskID;
            let taskStatus = arrayItem.status;
    
            let projectButtonList = document.getElementById('projList');

            if (selectedProj == "default") {

                projectButtonList.appendChild(addButton(projTitle));
            }
    
            let taskList = document.getElementById('tsk-lst');
        
            taskList.appendChild(addTask(taskDesc, taskDate, taskID, taskStatus));


        };


    });

    


}