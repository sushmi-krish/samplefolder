
const taskInput = document.getElementById('taskInput') 
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')
const clearCompletedBtn = document.getElementById('clearCompletedBtn')
const clearAllTask = document.getElementById('clearAllTask')
let tasks =[]

 function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText.value !== "")
    {
       tasks.push({text:taskText});
       taskInput.value = "";
       displayTask();
    }
 }
function displayTask()
{
   taskList.innerHTML ="";
    tasks.forEach((task,index) => 
    {
        const li = document.createElement('li');
        li.innerHTML =`<input type="checkbox" id="task-${index}" ${task.completed ? "checked":" "}><label for ="task-${index}">${task.text}</label>`
        li.querySelector('input').addEventListener("change",() =>  toogleTask(index));
        taskList.appendChild(li);
     });
    }


function toogleTask(index)
{
    tasks[index].completed = !tasks[index].completed;
    displayTask();
}
function clearCompletedTasks()
{
    tasks = tasks.filter(task => !task.completed);
    displayTask();
}
function clearAllTasks(){
 tasks.length=0;
 displayTask()
 
}

addTaskBtn.addEventListener("click",addTask);
clearCompletedBtn.addEventListener("click",clearCompletedTasks);
clearAllTask.addEventListener("click",clearAllTasks)