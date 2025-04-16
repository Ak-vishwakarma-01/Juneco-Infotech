const all_Tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const taskContainer = document.getElementById("cards");

var typeOfTask = "all";
var days = "m";

const color = {
    blue : '#0964F0',
    red:  '#EE0808',
    green: '#11D624',
    pink: '#EB08F0',
}


function showAllTasks() {
    taskContainer.innerHTML = ""; 

    const borderColor = typeOfTask == 'all' 
        ? color.red 
        : typeOfTask == 'work' 
            ? color.green 
            : typeOfTask == 'sport' 
                ? color.blue 
                : color.pink;
    all_Tasks.forEach((task, index) => {
        const dede = `<div 
        style="border-color: ${borderColor};"
        class="card">
                <div class="time gray">${task.time || "No time"}</div>
                <div>
                    <h3>${task.title || "Untitled"}</h3>
                    <h6 class="gray">${task.description || "No description"}</h6>
                </div>
                <button 
                    onclick="completed(${index})" 
                    style="background-color:${borderColor};">
                </button>
            </div>`;
        if(typeOfTask=="all") taskContainer.innerHTML += dede;
        else if(typeOfTask == task.worktype ) taskContainer.innerHTML += dede;
    });
}


showAllTasks();


// function completed(index){
//     new newTask = all_Tasks[index]
//     newTask.completed = true;
//     all_Tasks.splice(index,1);
//     all_Tasks.push(newTask);
//     localStorage.removeItem("tasks");
//     localStorage.setItem('tasks',JSON.stringify(all_Tasks));
// }

// function deleteThis(index){

// }


function addOneTask(){
    const worktype = document.getElementById("tasktype").value;
    const time = document.getElementById("appt").value;
    const day = document.getElementById("apday").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    
    const newtask = {
        worktype: worktype,
        time : time,
        day : day,
        title : title,
        description: description,
        completed: false
    }
    alert("taskadded")
    all_Tasks.push(newtask);
    localStorage.setItem('tasks',JSON.stringify(all_Tasks));

    showAllTasks();
    

}

function openAddForm(){
    const closethis = document.getElementById("closethis");
    closethis.style.display ="block";
    
}

function closeButton(){
    const closethis = document.getElementById("closethis");
    closethis.style.display = "none";
}

const personal = document.getElementById("personal");
const all = document.getElementById("all");
const work = document.getElementById("work");
const sport = document.getElementById("sport");

function allTask(){
    all.style.color = "black"
    personal.style.color = "#909090"
    work.style.color = "#909090"
    sport.style.color = "#909090"
    typeOfTask = "all"
    showAllTasks();
}

function workTask(){
    work.style.color = "black"
    all.style.color = "#909090"
    personal.style.color = "#909090"
    sport.style.color = "#909090"
    typeOfTask = "work"
    showAllTasks();
}

function sportTask(){
    sport.style.color = "black"
    all.style.color = "#909090"
    personal.style.color = "#909090"
    work.style.color = "#909090"
    typeOfTask = "sport"
    showAllTasks();
}

function personalTask(){
    personal.style.color = "black"
    all.style.color = "#909090"
    work.style.color = "#909090"
    sport.style.color = "#909090"
    typeOfTask = "personal"
    showAllTasks()
}
