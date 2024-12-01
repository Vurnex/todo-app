import addTask from "./addTask";
import addButton from "./addButton";
import Project from "./projects";

export default function populateData(allProjects, selectedProj) {

    let taskList = document.getElementById('tsk-lst');
    taskList.replaceChildren();

    if (selectedProj == "default") {

        allProjects.push( //Populate with example tasks
            {title: "Project 1", task: "New Pre Task", date: "2024-08-24"},
            {title: "Project 2", task: "New Pre Task 2", date: "2024-08-25"},
            {title: "Project 3", task: "New Pre Task 3", date: "2024-08-26"}
        );


    };

    
    allProjects.forEach(function (arrayItem) {

        if (arrayItem.title == selectedProj) {

            let projTitle = arrayItem.title;
            let taskDesc = arrayItem.task;
            let taskDate = arrayItem.date;
    
            //let projectButtonList = document.getElementById('projList');
    
            //projectButtonList.appendChild(addButton(projTitle));
        
            taskList.appendChild(addTask(taskDesc, taskDate));

        }
        else if (selectedProj == "default") {

            let projTitle = arrayItem.title;
            let taskDesc = arrayItem.task;
            let taskDate = arrayItem.date;
    
            let projectButtonList = document.getElementById('projList');
    
            projectButtonList.appendChild(addButton(projTitle));
    
            let taskList = document.getElementById('tsk-lst');
        
            taskList.appendChild(addTask(taskDesc, taskDate));


        };


    });

    


}