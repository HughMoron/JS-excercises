// Define UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//CONSOLE.LOG


//LOAD ALL EVENT LISTENERS
loadEventListeners();
//DEFINING THE EVENT LISTENERS
function loadEventListeners() {
    //ADD TASK EVENT
    form.addEventListener('submit', addTask)
    //REMOVE TASK EVENTS
    taskList.addEventListener("click", removeTask)
    //CLEAR TASKS EVENT
    clearBtn.addEventListener("click", removeTask)
    // FILTER THE TASK
    filter.addEventListener("keyup",filterTasks)

}

//ADD TASK EVENT HANDLER
function addTask(e) {
    if (!taskInput.value) {
        alert("Add a task")
    } else {
        let li = document.createElement("li");

        li.className = "collection-item"

        let textNode = document.createTextNode(taskInput.value);

        li.appendChild(textNode);

        let aNew = document.createElement("a");

        aNew.className = "delete-item secondary-content";

        aNew.innerHTML = "<i class='fa fa-remove'></i>";

        li.appendChild(aNew);

        taskList.appendChild(li)

        taskInput.blur();

        taskInput.value = "";

        document.querySelector("label").classList.remove("active");

        e.preventDefault();
    }
}

//REMOVE TASK EVENT
function removeTask(e) {
    if (e.target.closest("li")) {
        if(confirm("Are you sure?")){
        e.target.closest("li").remove()}
    }
    if (e.target === clearBtn) {
        if (confirm("Are you sure?")){
        Array.from(document.querySelectorAll("li")).forEach(element => {
            element.remove();
        });   
        }
    }
}

//FILTER THE TASK
function filterTasks(e){
    Array.from(document.querySelectorAll("li")).forEach(element => {
        if (!element.innerText.includes(filter.value)){
            element.style.display = "none";
        }
    }); 
}