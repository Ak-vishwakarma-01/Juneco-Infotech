const menu1 = document.getElementById("login");
menu1.addEventListener('click',()=>{
    const cont = document.getElementsByClassName("container")[0];
    cont.classList.toggle("active")
})


const menu2 = document.getElementById("signup");
menu2.addEventListener('click',()=>{
    const cont = document.getElementsByClassName("container")[0];
    cont.classList.toggle("active")
})
