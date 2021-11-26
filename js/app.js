const selectDay = document.querySelector('.events__select');
const selectHour = document.querySelector('.events__hours__select');
const task = document.querySelector('.events__content');
const submitTask = document.querySelector('.button');
const taskNum=document.querySelector('#task-num');
let taskCount =0;
const addTask = (e)=> {
 
    e.preventDefault();
  
    var daySelection = document.querySelector(".events__select").selectedIndex;
    const day =document.querySelectorAll(".days_option")[daySelection].value;
    var hourSelection = document.querySelector(".events__hours__select").selectedIndex;
    const hour =document.querySelectorAll(".hours_option")[hourSelection].text;
   const myTask = task.value;
  
  const taskWillAdd = {
    day,
    hour,
    myTask
  }

if(taskWillAdd.myTask!==''){ 
  taskCount++;
  switch(taskWillAdd.day){
    case 'monday': switch(taskWillAdd.hour){
   
      case '0:00-2:00': document.querySelector('#m-1').textContent=taskWillAdd.myTask;
      document.querySelector('#m-1').classList.add('item-filled');
      break;
      case '2:00-4:00': document.querySelector('#m-2').textContent=taskWillAdd.myTask;
      document.querySelector('#m-2').classList.add('item-filled');
      break;
      case '4:00-6:00': document.querySelector('#m-3').textContent=taskWillAdd.myTask;
      document.querySelector('#m-3').classList.add('item-filled');
      break;
      case '6:00-8:00': document.querySelector('#m-4').textContent=taskWillAdd.myTask;
      document.querySelector('#m-4').classList.add('item-filled');
      break;
      case '8:00-10:00': document.querySelector('#m-5').textContent=taskWillAdd.myTask;
      document.querySelector('#m-5').classList.add('item-filled');
      break;
      case '10:00-12:00': document.querySelector('#m-6').textContent=taskWillAdd.myTask;
      document.querySelector('#m-6').classList.add('item-filled');
      break;
      case '12:00-14:00': document.querySelector('#m-7').textContent=taskWillAdd.myTask;
      document.querySelector('#m-7').classList.add('item-filled');
      break;
      case '14:00-16:00': document.querySelector('#m-8').textContent=taskWillAdd.myTask;
      document.querySelector('#m-8').classList.add('item-filled');
      break;
      case '16:00-18:00': document.querySelector('#m-9').textContent=taskWillAdd.myTask;
      document.querySelector('#m-9').classList.add('item-filled');
      break;
      case '18:00-20:00': document.querySelector('#m-10').textContent=taskWillAdd.myTask;
      document.querySelector('#m-10').classList.add('item-filled');
      break;
      case '20:00-22:00': document.querySelector('#m-11').textContent=taskWillAdd.myTask;
      document.querySelector('#m-11').classList.add('item-filled');
      break;
      case '22:00-24:00': document.querySelector('#m-12').textContent=taskWillAdd.myTask;
      document.querySelector('#m-12').classList.add('item-filled');
      break;
    }
    break;
  
    case 'tuisday': switch(taskWillAdd.hour){
   
      case '0:00-2:00': document.querySelector('#tu-1').textContent=taskWillAdd.myTask;
      document.querySelector('#tu-1').classList.add('item-filled');
      break;
      case '2:00-4:00': document.querySelector('#tu-2').textContent=taskWillAdd.myTask;
      document.querySelector('#tu-2').classList.add('item-filled');
      break;
      case '4:00-6:00': document.querySelector('#tu-3').textContent=taskWillAdd.myTask;
      document.querySelector('#tu-3').classList.add('item-filled');
      break;
      case '6:00-8:00': document.querySelector('#tu-4').textContent=taskWillAdd.myTask;
      document.querySelector('#tu-4').classList.add('item-filled');
      break;
      case '8:00-10:00': document.querySelector('#tu-5').textContent=taskWillAdd.myTask;
      document.querySelector('#tu-5').classList.add('item-filled');
      break;
      case '10:00-12:00': document.querySelector('#tu-6').textContent=taskWillAdd.myTask;
      document.querySelector('#tu-6').classList.add('item-filled');
      break;
      case '12:00-14:00': document.querySelector('#tu-7').textContent=taskWillAdd.myTask;
      document.querySelector('#tu-7').classList.add('item-filled');
      break;
      case '14:00-16:00': document.querySelector('#tu-8').textContent=taskWillAdd.myTask;
      document.querySelector('#tu-8').classList.add('item-filled');
      break;
      case '16:00-18:00': document.querySelector('#tu-9').textContent=taskWillAdd.myTask;
      document.querySelector('#tu-9').classList.add('item-filled');
      break;
      case '18:00-20:00': document.querySelector('#tu-10').textContent=taskWillAdd.myTask;
      document.querySelector('#tu-10').classList.add('item-filled');
      break;
      case '20:00-22:00': document.querySelector('#tu-11').textContent=taskWillAdd.myTask;
      document.querySelector('#tu-11').classList.add('item-filled');
      break;
      case '22:00-24:00': document.querySelector('#tu-12').textContent=taskWillAdd.myTask;
      document.querySelector('#tu-12').classList.add('item-filled');
      break;
    }
    break;
  
    case 'wednesday': switch(taskWillAdd.hour){
   
      case '0:00-2:00': document.querySelector('#wed-1').textContent=taskWillAdd.myTask;
      document.querySelector('#wed-1').classList.add('item-filled');
      break;
      case '2:00-4:00': document.querySelector('#wed-2').textContent=taskWillAdd.myTask;
      document.querySelector('#wed-2').classList.add('item-filled');
      break;
      case '4:00-6:00': document.querySelector('#wed-3').textContent=taskWillAdd.myTask;
      document.querySelector('#wed-3').classList.add('item-filled');
      break;
      case '6:00-8:00': document.querySelector('#wed-4').textContent=taskWillAdd.myTask;
      document.querySelector('#wed-4').classList.add('item-filled');
      break;
      case '8:00-10:00': document.querySelector('#wed-5').textContent=taskWillAdd.myTask;
      document.querySelector('#wed-5').classList.add('item-filled');
      break;
      case '10:00-12:00': document.querySelector('#wed-6').textContent=taskWillAdd.myTask;
      document.querySelector('#wed-6').classList.add('item-filled');
      break;
      case '12:00-14:00': document.querySelector('#wed-7').textContent=taskWillAdd.myTask;
      document.querySelector('#wed-7').classList.add('item-filled');
      break;
      case '14:00-16:00': document.querySelector('#wed-8').textContent=taskWillAdd.myTask;
      document.querySelector('#wed-8').classList.add('item-filled');
      break;
      case '16:00-18:00': document.querySelector('#wed-9').textContent=taskWillAdd.myTask;
      document.querySelector('#wed-9').classList.add('item-filled');
      break;
      case '18:00-20:00': document.querySelector('#wed-10').textContent=taskWillAdd.myTask;
      document.querySelector('#wed-10').classList.add('item-filled');
      break;
      case '20:00-22:00': document.querySelector('#wed-11').textContent=taskWillAdd.myTask;
      document.querySelector('#wed-11').classList.add('item-filled');
      break;
      case '22:00-24:00': document.querySelector('#wed-12').textContent=taskWillAdd.myTask;
      document.querySelector('#wed-12').classList.add('item-filled');
      break;
    }
    break;
  
    case 'thirsday': switch(taskWillAdd.hour){
   
      case '0:00-2:00': document.querySelector('#thi-1').textContent=taskWillAdd.myTask;
      document.querySelector('#thi-1').classList.add('item-filled');
      break;
      case '2:00-4:00': document.querySelector('#thi-2').textContent=taskWillAdd.myTask;
      document.querySelector('#thi-2').classList.add('item-filled');
      break;
      case '4:00-6:00': document.querySelector('#thi-3').textContent=taskWillAdd.myTask;
      document.querySelector('#thi-3').classList.add('item-filled');
      break;
      case '6:00-8:00': document.querySelector('#thi-4').textContent=taskWillAdd.myTask;
      document.querySelector('#thi-4').classList.add('item-filled');
      break;
      case '8:00-10:00': document.querySelector('#thi-5').textContent=taskWillAdd.myTask;
      document.querySelector('#thi-5').classList.add('item-filled');
      break;
      case '10:00-12:00': document.querySelector('#thi-6').textContent=taskWillAdd.myTask;
      document.querySelector('#thi-6').classList.add('item-filled');
      break;
      case '12:00-14:00': document.querySelector('#thi-7').textContent=taskWillAdd.myTask;
      document.querySelector('#thi-7').classList.add('item-filled');
      break;
      case '14:00-16:00': document.querySelector('#thi-8').textContent=taskWillAdd.myTask;
      document.querySelector('#thi-8').classList.add('item-filled');
      break;
      case '16:00-18:00': document.querySelector('#thi-9').textContent=taskWillAdd.myTask;
      document.querySelector('#thi-9').classList.add('item-filled');
      break;
      case '18:00-20:00': document.querySelector('#thi-10').textContent=taskWillAdd.myTask;
      document.querySelector('#thi-10').classList.add('item-filled');
      break;
      case '20:00-22:00': document.querySelector('#thi-11').textContent=taskWillAdd.myTask;
      document.querySelector('#thi-11').classList.add('item-filled');
      break;
      case '22:00-24:00': document.querySelector('#thi-12').textContent=taskWillAdd.myTask;
      document.querySelector('#thi-12').classList.add('item-filled');
      break;
    }
    break;
    
    case 'friday': switch(taskWillAdd.hour){
   
      case '0:00-2:00': document.querySelector('#fri-1').textContent=taskWillAdd.myTask;
      document.querySelector('#fri-1').classList.add('item-filled');
      break;
      case '2:00-4:00': document.querySelector('#fri-2').textContent=taskWillAdd.myTask;
      document.querySelector('#fri-2').classList.add('item-filled');
      break;
      case '4:00-6:00': document.querySelector('#fri-3').textContent=taskWillAdd.myTask;
      document.querySelector('#fri-3').classList.add('item-filled');
      break;
      case '6:00-8:00': document.querySelector('#fri-4').textContent=taskWillAdd.myTask;
      document.querySelector('#fri-4').classList.add('item-filled');
      break;
      case '8:00-10:00': document.querySelector('#fri-5').textContent=taskWillAdd.myTask;
      document.querySelector('#fri-5').classList.add('item-filled');
      break;
      case '10:00-12:00': document.querySelector('#fri-6').textContent=taskWillAdd.myTask;
      document.querySelector('#fri-6').classList.add('item-filled');
      break;
      case '12:00-14:00': document.querySelector('#fri-7').textContent=taskWillAdd.myTask;
      document.querySelector('#fri-7').classList.add('item-filled');
      break;
      case '14:00-16:00': document.querySelector('#fri-8').textContent=taskWillAdd.myTask;
      document.querySelector('#fri-8').classList.add('item-filled');
      break;
      case '16:00-18:00': document.querySelector('#fri-9').textContent=taskWillAdd.myTask;
      document.querySelector('#fri-9').classList.add('item-filled');
      break;
      case '18:00-20:00': document.querySelector('#fri-10').textContent=taskWillAdd.myTask;
      document.querySelector('#fri-10').classList.add('item-filled');
      break;
      case '20:00-22:00': document.querySelector('#fri-11').textContent=taskWillAdd.myTask;
      document.querySelector('#fri-11').classList.add('item-filled');
      break;
      case '22:00-24:00': document.querySelector('#fri-12').textContent=taskWillAdd.myTask;
      document.querySelector('#fri-12').classList.add('item-filled');
      break;
    }
    break;

    case 'saturday': switch(taskWillAdd.hour){
   
      case '0:00-2:00': document.querySelector('#sat-1').textContent=taskWillAdd.myTask;
      document.querySelector('#sat-1').classList.add('item-filled');
      break;
      case '2:00-4:00': document.querySelector('#sat-2').textContent=taskWillAdd.myTask;
      document.querySelector('#sat-2').classList.add('item-filled');
      break;
      case '4:00-6:00': document.querySelector('#sat-3').textContent=taskWillAdd.myTask;
      document.querySelector('#sat-3').classList.add('item-filled');
      break;
      case '6:00-8:00': document.querySelector('#sat-4').textContent=taskWillAdd.myTask;
      document.querySelector('#sat-4').classList.add('item-filled');
      break;
      case '8:00-10:00': document.querySelector('#sat-5').textContent=taskWillAdd.myTask;
      document.querySelector('#sat-5').classList.add('item-filled');
      break;
      case '10:00-12:00': document.querySelector('#sat-6').textContent=taskWillAdd.myTask;
      document.querySelector('#sat-6').classList.add('item-filled');
      break;
      case '12:00-14:00': document.querySelector('#sat-7').textContent=taskWillAdd.myTask;
      document.querySelector('#sat-7').classList.add('item-filled');
      break;
      case '14:00-16:00': document.querySelector('#sat-8').textContent=taskWillAdd.myTask;
      document.querySelector('#sat-8').classList.add('item-filled');
      break;
      case '16:00-18:00': document.querySelector('#sat-9').textContent=taskWillAdd.myTask;
      document.querySelector('#sat-9').classList.add('item-filled');
      break;
      case '18:00-20:00': document.querySelector('#sat-10').textContent=taskWillAdd.myTask;
      document.querySelector('#sat-10').classList.add('item-filled');
      break;
      case '20:00-22:00': document.querySelector('#sat-11').textContent=taskWillAdd.myTask;
      document.querySelector('#sat-11').classList.add('item-filled');
      break;
      case '22:00-24:00': document.querySelector('#sat-12').textContent=taskWillAdd.myTask;
      document.querySelector('#sat-12').classList.add('item-filled');
      break;
    }
    break;

    case 'sunday': switch(taskWillAdd.hour){
   
      case '0:00-2:00': document.querySelector('#san-1').textContent=taskWillAdd.myTask;
      document.querySelector('#san-1').classList.add('item-filled');
      break;
      case '2:00-4:00': document.querySelector('#san-2').textContent=taskWillAdd.myTask;
      document.querySelector('#san-2').classList.add('item-filled');
      break;
      case '4:00-6:00': document.querySelector('#san-3').textContent=taskWillAdd.myTask;
      document.querySelector('#san-3').classList.add('item-filled');
      break;
      case '6:00-8:00': document.querySelector('#san-4').textContent=taskWillAdd.myTask;
      document.querySelector('#san-4').classList.add('item-filled');
      break;
      case '8:00-10:00': document.querySelector('#san-5').textContent=taskWillAdd.myTask;
      document.querySelector('#san-5').classList.add('item-filled');
      break;
      case '10:00-12:00': document.querySelector('#san-6').textContent=taskWillAdd.myTask;
      document.querySelector('#san-6').classList.add('item-filled');
      break;
      case '12:00-14:00': document.querySelector('#san-7').textContent=taskWillAdd.myTask;
      document.querySelector('#san-7').classList.add('item-filled');
      break;
      case '14:00-16:00': document.querySelector('#san-8').textContent=taskWillAdd.myTask;
      document.querySelector('#san-8').classList.add('item-filled');
      break;
      case '16:00-18:00': document.querySelector('#san-9').textContent=taskWillAdd.myTask;
      document.querySelector('#san-9').classList.add('item-filled');
      break;
      case '18:00-20:00': document.querySelector('#san-10').textContent=taskWillAdd.myTask;
      document.querySelector('#san-10').classList.add('item-filled');
      break;
      case '20:00-22:00': document.querySelector('#san-11').textContent=taskWillAdd.myTask;
      document.querySelector('#san-11').classList.add('item-filled');
      break;
      case '22:00-24:00': document.querySelector('#san-12').textContent=taskWillAdd.myTask;
      document.querySelector('#san-12').classList.add('item-filled');
      break;
    }
    break;
  }
}
else {
  alert('Task should be filled');
}
task.value='';
taskNum.textContent=taskCount;
console.log(taskCount)
  return taskWillAdd;
  
}
submitTask.addEventListener('click',addTask) ;

