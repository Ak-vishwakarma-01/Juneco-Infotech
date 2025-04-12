const menubtn = document.getElementById("menubtn");
const closebtn = document.getElementById("closebtn");
const menu = document.getElementById("mobilemenu");




menubtn.addEventListener('click', ()=>{
    menu.style.left = 0;
})

closebtn.addEventListener('click', ()=>{
    menu.style.left = '-100%'
})