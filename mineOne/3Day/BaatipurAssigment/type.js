function toggleView(){
    const menu = document.getElementsByClassName("nav")[0];
    menu.classList.toggle("active");
    const land = document.getElementsByClassName("landing")[0];
    land.classList.toggle("land");

}