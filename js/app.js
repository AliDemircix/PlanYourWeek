const selectDay = document.querySelector('.events__select');
const selectHour = document.querySelector('.events__hours__select');
const task = document.querySelector('.events__content');
const submitTask = document.querySelector('.button');

const addTask = (e)=> {
 
    e.preventDefault();
  
    var x = document.querySelector(".events__select").selectedIndex;
    const day =document.querySelectorAll(".days_option")[x].value;
    var hourSelection = document.querySelector(".events__hours__select").selectedIndex;
    const hour =document.querySelectorAll(".hours_option")[hourSelection].text;
   const myTask = task.value;
  const taskWillAdd = {
    day,
    hour,
    myTask
  }
  // Will Add Here Calendar Inputs

// if(taskWillAdd.day=='monday'){
//   if(taskWillAdd.hour=='0:00-2:00'){
//     console.log(taskWillAdd.hour)
   
//   }
//   console.log(taskWillAdd.day)
// }
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
}
task.value='';
  return taskWillAdd;
  
}
submitTask.addEventListener('click',addTask) ;

