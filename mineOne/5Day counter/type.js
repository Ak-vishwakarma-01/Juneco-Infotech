const menu = document.getElementById("count");


function changeValue(value) {
    menu.innerText = value;
    
}

for (let index = 0; index < 100; index++) {
    setTimeout(()=> {
        menu.innerText = index;
    }, index * 10)
}
