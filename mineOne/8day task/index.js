const all_Tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const taskContainer = document.getElementById("cards");

var typeOfTask = "all";

const date = new Date().getDay();
const customDays = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];
var day = customDays[date-1];
alert(day);

const color = {
    blue : '#0964F0',
    red:  '#EE0808',
    green: '#11D624',
    pink: '#EB08F0',
}

// const de = ""

function showAllTasks() {
    taskContainer.innerHTML = ""; 

    all_Tasks.forEach((task, index) => {
        const borderColor = task.worktype == 'work' 
            ? color.green 
            : task.worktype == 'sport' 
                ? color.blue 
                : color.pink;

        const dede = `<div 
        style="border-color: ${borderColor}; "
        class="card">
                <div class="time gray"
                style = text-decoration:${ task.completed ? "line-through" : "" } #909090;
                >${task.time || "No time"}</div>
                <div>
                    <h3 style="text-decoration:${ task.completed ? "line-through" : "" } black; " 
                    >${task.title || "Untitled"}</h3>
                    <h6 class="gray"
                    style=text-decoration:${ task.completed ? "line-through" : "" } #909090;
                    >${task.description || "No description"}</h6>
                </div>
                <button 
                    onclick="completed(${index})" 
                    style="background-color:${borderColor}; text-decoration: none ; ">
                    ${task.completed ? "✓" : "x"}
                </button>
                <button onclick="ondelete(${index})" 
                    style="background-color:${borderColor}; text-decoration: none ; right:30px ;">
                    🗑
                </button>
            </div>`;
        if(day==task.day){
             if(typeOfTask=="all") taskContainer.innerHTML += dede;
        else if(typeOfTask == task.worktype ) taskContainer.innerHTML += dede;
        }
    });

}

showAllTasks();

function completed(index){
    const newTask = all_Tasks[index]
    newTask.completed = true;
    all_Tasks.splice(index,1);
    all_Tasks.push(newTask);
    localStorage.setItem('tasks',JSON.stringify(all_Tasks));
    showAllTasks();

}

function ondelete(index){
    const newTask = all_Tasks[index];
    all_Tasks.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(all_Tasks));
    showAllTasks();
}


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


const m = document.getElementById("m1");
m.style.backgroundColor = color.red;
m.style.color = "white"; 
const tu = document.getElementById("tu2");
const w = document.getElementById("w3");
const th = document.getElementById("th4");
const f = document.getElementById("f5");
const sa = document.getElementById("sa6");
const su = document.getElementById("su7");


const m2 = document.getElementById("m11");
m2.style.backgroundColor = color.red;
m2.style.color = "white"; 
const tu21 = document.getElementById("tu21");
const w2 = document.getElementById("w31");
const th2 = document.getElementById("th41");
const f2 = document.getElementById("f51");
const sa2 = document.getElementById("sa61");
const su2 = document.getElementById("su71");


const weekcolor = [m, tu, w, th, f, sa, su, m2, tu21, w2, th2, f2, sa2, su2];

function m1(){

    weekcolor.forEach((ele, index)=>{
        if(ele == m || ele==m2){
            ele.style.backgroundColor = color.red;
            ele.style.color = "white";
        }else{
            ele.style.backgroundColor = "inherit"
        }
    })

    day = "M"
    showAllTasks();

}
function tu2(){

    weekcolor.forEach((ele, index)=>{
        if(ele == tu || ele == tu21){
            ele.style.backgroundColor = color.red;
            ele.style.color = "white";
        }else{
            ele.style.backgroundColor = "inherit"
        }
    })

    day = "Tu"
    showAllTasks();
}
function w3(){
    weekcolor.forEach((ele, index)=>{
        if(ele == w || ele==w2){
            ele.style.backgroundColor = color.red;
            ele.style.color = "white";
        }else{
            ele.style.backgroundColor = "inherit"
        }
    })

    day = "W"
    showAllTasks();

}
function th4(){
    weekcolor.forEach((ele, index)=>{
        if(ele == th || ele==th2){
            ele.style.backgroundColor = color.red;
            ele.style.color = "white";
        }else{
            ele.style.backgroundColor = "inherit"
        }
    })

    day = "Th"
    showAllTasks();
}
function f5(){
    weekcolor.forEach((ele, index)=>{
        if(ele == f || ele==f2){
            ele.style.backgroundColor = color.red;
            ele.style.color = "white";
        }else{
            ele.style.backgroundColor = "inherit"
        }
    })

    day = "F"
    showAllTasks();
}
function sa6(){
    weekcolor.forEach((ele, index)=>{
        if(ele == sa || ele==sa2){
            ele.style.backgroundColor = color.red;
            ele.style.color = "white";
        }else{
            ele.style.backgroundColor = "inherit"
        }
    })

    day = "Sa"
    showAllTasks();
}
function su7(){
    weekcolor.forEach((ele, index)=>{
        if(ele == su || ele==su2){
            ele.style.backgroundColor = color.red;
            ele.style.color = "white";
        }else{
            ele.style.backgroundColor = "inherit"
        }
    })

    day = "Su"
    showAllTasks();

}
