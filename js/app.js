const selectDay = document.querySelector('.events__select');
const selectHour = document.querySelector('.events__hours__select');
const task = document.querySelector('.events__content');
const submitTask = document.querySelector('.button');
const taskNum=document.querySelector('#task-num');
const taskTotalTime=document.querySelector('#task-time');
const taskTotalComp=document.querySelector('#task-comp-num');
const dateSelect= document.querySelector('.date');
const showIcon= document.querySelector('.fa-angle-up');
const containerAnalytic= document.querySelector('.container__analytics');
const time= document.querySelector(".time");

// Show-Hide Stats
showIcon.addEventListener('click',()=> {
  containerAnalytic.classList.toggle("hidden");
  if(showIcon.className==="fas fa-angle-up"){
    showIcon.className="fas fa-angle-down";
  }
  else if(showIcon.className==="fas fa-angle-down"){
    showIcon.className="fas fa-angle-up";
  }
})
 
// Show Time Start
setInterval(showTime,1000)
function showTime() {
  let date =new Date();
let h = date.getHours()
let m = date.getMinutes()
let s = date.getSeconds()
  let currentTime =`${h}:${m}:${s} `;
time.textContent=currentTime
dateSelect.textContent=date.toLocaleDateString();
}
let taskCount =0;
let taskCompletedCount=0;
//To Add Task Call This Function
const findPlace = (day,hour,task) => {
  if(task===""){
     return alert('Task Can not be empty')
    }else {
      document.querySelector(`#${day}${hour}`).textContent=task;
      document.querySelector(`#${day}${hour}`).classList.add('item-filled');
      taskCount++;
     
    }

}
const addedEvents= document.querySelectorAll(".hours__list__item");
console.log(addedEvents)
const completeTask = (e) => {
e.target.classList.add("completed");
taskCompletedCount++;
taskTotalComp.textContent=taskCompletedCount;
}
addedEvents.forEach(event => {
  event.addEventListener('click',completeTask)
});
// Main Function
const addTask = (e)=> {
    e.preventDefault();
    var daySelection = document.querySelector(".events__select").selectedIndex;
    const day =document.querySelectorAll(".days_option")[daySelection].value;
    var hourSelection = document.querySelector(".events__hours__select").selectedIndex;
    const hour =document.querySelectorAll(".hours_option")[hourSelection].value;
   const myTask = task.value;

  findPlace(day,hour,myTask);
 
  taskNum.textContent=taskCount;
  taskTotalTime.textContent=taskCount*2;
  
  task.value='';
}
submitTask.addEventListener('click',addTask) ;


