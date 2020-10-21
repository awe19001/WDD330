import LocalStorage from './ls.js';

const saveTodo = document.querySelector('.btnAddTodo');
const btnAll = document.querySelector('.btnAll');
const btnActive = document.querySelector('.btnActive');
const btnCompleted = document.querySelector('.btnComplete');

const todoList = new LocalStorage();

todoList.loadTodoList();

saveTodo.addEventListener('click', () => {
    todoList.saveTodoList();
});

btnAll.addEventListener('click', () => {
    todoList.allTodoTasks();
    btnAll.classList.add('active');
    btnAll.classList.remove('inActive');
    btnActive.classList.remove('active');
    btnActive.classList.add('inActive');
    btnCompleted.classList.remove('active');
    btnCompleted.classList.add('inActive');
});

btnActive.addEventListener('click', () => {
    todoList.activeTodoTasks();
    btnActive.classList.add('active');
    btnActive.classList.remove('inActive');
    btnAll.classList.remove('active');
    btnAll.classList.add('inActive');
    btnCompleted.classList.remove('active');
    btnCompleted.classList.add('inActive');
});

btnCompleted.addEventListener('click', () => {
    todoList.completedTodoTasks();
    btnCompleted.classList.add('active');
    btnCompleted.classList.remove('inActive');
    btnAll.classList.remove('active');
    btnAll.classList.add('inActive');
    btnActive.classList.remove('active');
    btnActive.classList.add('inActive');
});
  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
