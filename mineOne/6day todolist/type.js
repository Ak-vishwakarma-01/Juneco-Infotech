const todos = JSON.parse(localStorage.getItem("todos")) || [];

const todoForm = document.getElementById("todoForm");
const todosContainer = document.getElementById("todos");

var check = null;

function displayTodos() {
    todosContainer.innerHTML = "";
  todos.forEach((todo, index) => {
    const dede = `
    <div class="todo">
    <h4>${todo.title}</h4>
    <p>${todo.description}</p>
    <div> 
        <button class="btn btn-danger" id="deletetodo" onclick="deleteTodo(${index})">Delete</button>
        ${ todo.completed==false ? `<button class="btn btn-danger" id="completetodo" onclick="completeTodo(${index})">completed</button>` : ``}
        </div> 
    <div>
    ` ;
    
    if(check==null){
        todosContainer.innerHTML += dede;
    }else if(check && todo.completed){
        todosContainer.innerHTML += dede;
    }else if(!check && !todo.completed){
        todosContainer.innerHTML += dede;
    }
});
}

displayTodos();

function allList(){
    check = null;
    displayTodos();
}

function pending(){
    check = false
    displayTodos();
}

function completed(){
    check = true;
    displayTodos();
}

function deleteTodo(index){
    todos.splice(index,1)
    localStorage.removeItem("todos");
    localStorage.setItem('todos',JSON.stringify(todos));
    displayTodos();
}

function completeTodo(index){
    const newTodo = todos[index];
    newTodo.completed = true;
    // alert(JSON.stringify(newTodo))
    todos.splice(index,1);
    todos.push(newTodo);
    localStorage.removeItem("todos");
    localStorage.setItem('todos',JSON.stringify(todos));
    displayTodos();
}

function addTodo(title, description) {
    const newTodo = {
        title: title, 
        description: description,
        completed: false,
    };
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
   displayTodos();
}

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
  const description = document.getElementById("desc").value;
  addTodo(title, description);
  todoForm.reset();
  alert("Todo added successfully!");
});

