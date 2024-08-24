import addTask from "./addTask";
import addButton from "./addButton";
import Project from "./projects";

export default function populateData(allProjects) {

    //console.log("Test populate function");

    allProjects.push(
        {title: "Project 1", task: "New Pre Task", date: "2024-08-24"},
        {title: "Project 2", task: "New Pre Task 2", date: "2024-08-24"},
        {title: "Project 3", task: "New Pre Task 3", date: "2024-08-24"}
    );
    
    allProjects.forEach(function (arrayItem) {

        let projTitle = arrayItem.title;
        let taskDesc = arrayItem.task;
        let taskDate = arrayItem.date;

        let projectButtonList = document.getElementById('projList');

        projectButtonList.appendChild(addButton(projTitle));

        let taskList = document.getElementById('tsk-lst');
    
        taskList.appendChild(addTask(taskDesc, taskDate));

        //console.log(projTitle);

        //console.log(arrayItem.title);

        //console.log("Test array function");


    })

    


}