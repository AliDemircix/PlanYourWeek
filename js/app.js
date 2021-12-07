import { create, addChild } from './createElement.js';
// Dom Codes Start Definitions
const bodyElem = document.querySelector('body');
const headerDiv = create('header', 'header');
const headerContainer = create('div', 'container');
const headerTimes = create('div', 'times');
const headerDate = create('div', 'date');
const headerTitle = create('div', 'headertitle');
const headerTitleH1 = create('div', 'headertitle__title', 'plan your week');
const headerTime = create('div', 'time');
const headerSecContainer = create('div', 'container');
const arrowIcon = create('i', 'fas fa-angle-up');
const hAnalyticUl = create('ul', 'container__analytics');
const hAnalyticLi1 = create('li', 'analytics__item');
const hAnalyticLi2 = create('li', 'analytics__item');
const hAnalyticLi3 = create('li', 'analytics__item');
const hAnalyticLi4 = create('li', 'analytics__item');
const hAnalyticLi5 = create('li', 'analytics__item');
const hAnalyticLi6 = create('li', 'analytics__item');
const hAnalyticSp1 = create(
  'span',
  'analytics__item--content',
  'Total focused time',
);
const hAnalyticSp2 = create(
  'span',
  'analytics__item--content',
  'Total focused time',
);
const hAnalyticSp3 = create(
  'span',
  'analytics__item--content',
  'Total focused time',
);
const hAnalyticSp4 = create(
  'span',
  'analytics__item--content',
  'Total focused time',
);
const hAnalyticSp5 = create(
  'span',
  'analytics__item--content',
  'Total focused time',
);
const hAnalyticSp6 = create(
  'span',
  'analytics__item--content',
  'Total focused time',
);
const li1H1 = create('h1', 'analytics__item--header', '0');
li1H1.id = 'task-time';
const li2H1 = create('h1', 'analytics__item--header', '0');
const li3H1 = create('h1', 'analytics__item--header', '0');
const li4H1 = create('h1', 'analytics__item--header', '0');
li4H1.id = 'task-num';
const li5H1 = create('h1', 'analytics__item--header', '0');
li5H1.id = 'task-comp-num';
const li6H1 = create('h1', 'analytics__item--header', '0');

//MAIN SECTION START
const myMain = create('main');
const mainSection = create('section');
const mContainer = create('div', 'container');
const mContEvents = create('div', 'events');
const mForm = create('form', 'form__events');
const mFormWrapper = create('div', 'events__day__options');
const mFormLabel = create('label', 'events__label');
mFormLabel.for = 'events_days';
const mFormCalenderI = create('i', 'far fa-calendar-alt fa-2x');
const mFormSelect = create('select', 'events__select');
mFormSelect.id = 'events_days';
mFormSelect.name = 'events_days';
const mFromOption1 = create('option', 'days_option', 'Monday');
mFromOption1.value = 'm';
const mFromOption2 = create('option', 'days_option', 'Tuesday');
mFromOption2.value = 'tu';
const mFromOption3 = create('option', 'days_option', 'Wednesday');
mFromOption3.value = 'wed';
const mFromOption4 = create('option', 'days_option', 'Thirsday');
mFromOption4.value = 'thi';
const mFromOption5 = create('option', 'days_option', 'Friday');
mFromOption5.value = 'fri';
const mFromOption6 = create('option', 'days_option', 'Saturday');
mFromOption6.value = 'sat';
const mFromOption7 = create('option', 'days_option', 'Sunday');
mFromOption7.value = 'sun';
const mFormHoursOption = create('div', 'event__hours__options');
const hoursLabel = create('label', 'events__label');
hoursLabel.for = 'events_hours';
const hoursI = create('i', 'far fa-clock fa-2x');
const hoursSelect = create('select', 'events__hours__select');
hoursSelect.name = 'events_hours';
hoursSelect.id = 'event_hours';
const hoursOption1 = create('option', 'hours_option', '0:00-2:00');
hoursOption1.value = '1';
const hoursOption2 = create('option', 'hours_option', '2:00-4:00');
hoursOption2.value = '2';
const hoursOption3 = create('option', 'hours_option', '4:00-6:00');
hoursOption3.value = '3';
const hoursOption4 = create('option', 'hours_option', '6:00-8:00');
hoursOption4.value = '4';
const hoursOption5 = create('option', 'hours_option', '8:00-10:00');
hoursOption5.value = '5';
const hoursOption6 = create('option', 'hours_option', '10:00-12:00');
hoursOption6.value = '6';
const hoursOption7 = create('option', 'hours_option', '12:00-14:00');
hoursOption7.value = '7';
const hoursOption8 = create('option', 'hours_option', '14:00-16:00');
hoursOption8.value = '8';
const hoursOption9 = create('option', 'hours_option', '16:00-18:00');
hoursOption9.value = '9';
const hoursOption10 = create('option', 'hours_option', '18:00-20:00');
hoursOption10.value = '10';
const hoursOption11 = create('option', 'hours_option', '20:00-22:00');
hoursOption11.value = '11';
const hoursOption12 = create('option', 'hours_option', '22:00-24:00');
hoursOption12.value = '12';
const eventInput = create('input', 'events__content');
eventInput.placeholder = 'Add your event';
eventInput.type = 'text';
const addButton = create('button', 'button btn--events--submit', 'ADD');
const scheduleInner = `<div class="container">
<div class="hours-title">
  <ul class="title__list">
    <li class='title__list__item'>0:00</li>
    <li class='title__list__item'>2:00</li>
    <li class='title__list__item'>4:00</li>
    <li class='title__list__item'>6:00</li>
    <li class='title__list__item'>8:00</li>
    <li class='title__list__item'>10:00</li>
    <li class='title__list__item'>12:00</li>
    <li class='title__list__item'>14:00</li>
    <li class='title__list__item'>16:00</li>
    <li class='title__list__item'>18:00</li>
    <li class='title__list__item'>20:00</li>
    <li class='title__list__item'>22:00</li>
    <li class='title__list__item'>24:00</li>
  </ul>
</div>
<div class="calendar">
<div class="days">
<ul class='days__list '>
  <li class='days__list__item'>Monday</li>
  <li class='days__list__item'>Tuisday</li>
  <li class='days__list__item'>Wednesday</li>
  <li class='days__list__item'>Thirsday</li>
  <li class='days__list__item'>Friday</li>
  <li class='days__list__item'>Saturday</li>
  <li class='days__list__item'>Sunday</li>
</ul>
</div>
<div class="hours">
<ul class='hours__list monday'>
  <li id='m1' class='hours__list__item '></li>
  <li id='m2' class='hours__list__item'></li>
  <li id='m3' class='hours__list__item'></li>
  <li id='m4' class='hours__list__item'></li>
  <li id='m5' class='hours__list__item'></li>
  <li id='m6' class='hours__list__item'></li>
  <li id='m7' class='hours__list__item'></li>
  <li id='m8' class='hours__list__item'></li>
  <li id='m9' class='hours__list__item'></li>
  <li id='m10' class='hours__list__item'></li>
  <li id='m11' class='hours__list__item'></li>
  <li id='m12' class='hours__list__item'></li>
</ul>
<ul class='hours__list tuisday'>
  <li id='tu1' class='hours__list__item'></li>
  <li id='tu2' class='hours__list__item'></li>
  <li id='tu3' class='hours__list__item'></li>
  <li id='tu4' class='hours__list__item'></li>
  <li id='tu5' class='hours__list__item'></li>
  <li id='tu6' class='hours__list__item'></li>
  <li id='tu7' class='hours__list__item '></li>
  <li id='tu8' class='hours__list__item'></li>
  <li id='tu9' class='hours__list__item'></li>
  <li id='tu10' class='hours__list__item'></li>
  <li id='tu11' class='hours__list__item'></li>
  <li id='tu12' class='hours__list__item'></li>
</ul>
<ul class='hours__list wednesday'>
  <li id='wed1' class='hours__list__item'></li>
  <li id='wed2' class='hours__list__item'></li>
  <li id='wed3' class='hours__list__item'></li>
  <li id='wed4' class='hours__list__item'></li>
  <li id='wed5' class='hours__list__item'></li>
  <li id='wed6' class='hours__list__item'></li>
  <li id='wed7' class='hours__list__item '></li>
  <li id='wed8' class='hours__list__item'></li>
  <li id='wed9' class='hours__list__item'></li>
  <li id='wed10' class='hours__list__item'></li>
  <li id='wed11' class='hours__list__item'></li>
  <li id='wed12' class='hours__list__item'></li>
</ul>
<ul class='hours__list thirsday'>
  <li id='thi1' class='hours__list__item'></li>
  <li id='thi2' class='hours__list__item'></li>
  <li id='thi3' class='hours__list__item'></li>
  <li id='thi4' class='hours__list__item'></li>
  <li id='thi5' class='hours__list__item'></li>
  <li id='thi6' class='hours__list__item'></li>
  <li id='thi7' class='hours__list__item '></li>
  <li id='thi8' class='hours__list__item'></li>
  <li id='thi9' class='hours__list__item'></li>
  <li id='thi10' class='hours__list__item'></li>
  <li id='thi11' class='hours__list__item'></li>
  <li id='thi12' class='hours__list__item'></li>
</ul>
<ul class='hours__list friday'>
  <li id='fri1' class='hours__list__item'></li>
  <li id='fri2' class='hours__list__item'></li>
  <li id='fri3' class='hours__list__item'></li>
  <li id='fri4' class='hours__list__item'></li>
  <li id='fri5' class='hours__list__item'></li>
  <li id='fri6' class='hours__list__item'></li>
  <li id='fri7' class='hours__list__item '></li>
  <li id='fri8' class='hours__list__item'></li>
  <li id='fri9' class='hours__list__item'></li>
  <li id='fri10' class='hours__list__item'></li>
  <li id='fri11' class='hours__list__item'></li>
  <li id='fri12' class='hours__list__item'></li>
</ul>
<ul class='hours__list saturday'>
  <li id='sat1' class='hours__list__item'></li>
  <li id='sat2' class='hours__list__item'></li>
  <li id='sat3' class='hours__list__item'></li>
  <li id='sat4' class='hours__list__item'></li>
  <li id='sat5' class='hours__list__item'></li>
  <li id='sat6' class='hours__list__item'></li>
  <li id='sat7' class='hours__list__item '></li>
  <li id='sat8' class='hours__list__item'></li>
  <li id='sat9' class='hours__list__item'></li>
  <li id='sat10' class='hours__list__item'></li>
  <li id='sat11' class='hours__list__item'></li>
  <li id='sat12' class='hours__list__item'></li>
</ul>
<ul class='hours__list sunday '>
  <li id='sun1' class='hours__list__item'></li>
  <li id='sun2' class='hours__list__item'></li>
  <li id='sun3' class='hours__list__item'></li>
  <li id='sun4' class='hours__list__item'></li>
  <li id='sun5' class='hours__list__item'></li>
  <li id='sun6' class='hours__list__item'></li>
  <li id='sun7' class='hours__list__item '></li>
  <li id='sun8' class='hours__list__item'></li>
  <li id='sun9' class='hours__list__item'></li>
  <li id='sun10' class='hours__list__item'></li>
  <li id='sun11' class='hours__list__item'></li>
  <li id='sun12' class='hours__list__item'></li>
</ul>
</div>
</div>
</div>`;
const sectionSchedule = create('section');
sectionSchedule.innerHTML = scheduleInner;

const array = [
  hoursOption1,
  hoursOption2,
  hoursOption3,
  hoursOption4,
  hoursOption5,
  hoursOption6,
  hoursOption7,
  hoursOption8,
  hoursOption9,
  hoursOption10,
  hoursOption11,
  hoursOption12,
];
//MAIN SECTION END

//Add Elements

addChild(headerDiv, bodyElem);
addChild(headerContainer, headerDiv);
addChild(headerSecContainer, headerDiv);
addChild(hAnalyticUl, headerSecContainer);
addChild(arrowIcon, headerSecContainer);
addChild(hAnalyticLi1, hAnalyticUl);
addChild(li1H1, hAnalyticLi1);
addChild(hAnalyticSp1, hAnalyticLi1);
addChild(li2H1, hAnalyticLi2);
addChild(hAnalyticSp2, hAnalyticLi2);
addChild(li3H1, hAnalyticLi3);
addChild(hAnalyticSp3, hAnalyticLi3);
addChild(li4H1, hAnalyticLi4);
addChild(hAnalyticSp4, hAnalyticLi4);
addChild(li5H1, hAnalyticLi5);
addChild(hAnalyticSp5, hAnalyticLi5);
addChild(li6H1, hAnalyticLi6);
addChild(hAnalyticSp6, hAnalyticLi6);
addChild(hAnalyticLi2, hAnalyticUl);
addChild(hAnalyticLi3, hAnalyticUl);
addChild(hAnalyticLi4, hAnalyticUl);
addChild(hAnalyticLi5, hAnalyticUl);
addChild(hAnalyticLi6, hAnalyticUl);
addChild(headerTimes, headerContainer);
addChild(headerDate, headerTimes);
addChild(headerTitle, headerTimes);
addChild(headerTitleH1, headerTitle);
addChild(headerTime, headerTimes);

//MAIN SECTION ADD ELEMENT START
addChild(myMain, bodyElem);
addChild(mainSection, myMain);
addChild(sectionSchedule, myMain);
addChild(mContainer, mainSection);
addChild(mContEvents, mContainer);
addChild(mForm, mContEvents);
addChild(mFormWrapper, mForm);
addChild(mFormHoursOption, mForm);
addChild(eventInput, mForm);
addChild(addButton, mForm);
addChild(hoursLabel, mFormHoursOption);
addChild(hoursSelect, mFormHoursOption);
addChild(hoursI, hoursLabel);
// addChild(hoursOption1, hoursSelect);
// addChild(hoursOption2, hoursSelect);
// addChild(hoursOption3, hoursSelect);
// addChild(hoursOption4, hoursSelect);
// addChild(hoursOption5, hoursSelect);
// addChild(hoursOption6, hoursSelect);
// addChild(hoursOption7, hoursSelect);
// addChild(hoursOption8, hoursSelect);
// addChild(hoursOption9, hoursSelect);
// addChild(hoursOption10, hoursSelect);
// addChild(hoursOption11, hoursSelect);
// addChild(hoursOption12, hoursSelect);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  addChild(array[i], hoursSelect);
}

// for (const element of array) {
//   addChild(element, hoursSelect);
// }

addChild(mFormLabel, mFormWrapper);
addChild(mFormCalenderI, mFormLabel);
addChild(mFormSelect, mFormWrapper);
addChild(mFromOption1, mFormSelect);
addChild(mFromOption2, mFormSelect);
addChild(mFromOption3, mFormSelect);
addChild(mFromOption4, mFormSelect);
addChild(mFromOption5, mFormSelect);
addChild(mFromOption6, mFormSelect);
addChild(mFromOption7, mFormSelect);

//MAIN SECTION ADD ELEMENT END
// Dom Codes Finish
const selectDay = document.querySelector('.events__select');
const selectHour = document.querySelector('.events__hours__select');
const task = document.querySelector('.events__content');
const submitTask = document.querySelector('.button');
const taskNum = document.querySelector('#task-num');
const taskTotalTime = document.querySelector('#task-time');
const taskTotalComp = document.querySelector('#task-comp-num');
const dateSelect = document.querySelector('.date');
const showIcon = document.querySelector('.fa-angle-up');
const containerAnalytic = document.querySelector('.container__analytics');
const time = document.querySelector('.time');
const addedEvents = document.querySelectorAll('.hours__list__item');

//Dom Create

// Show-Hide Stats
arrowIcon.addEventListener('click', () => {
  containerAnalytic.classList.toggle('hidden');
  if (arrowIcon.className === 'fas fa-angle-up') {
    arrowIcon.className = 'fas fa-angle-down';
  } else if (arrowIcon.className === 'fas fa-angle-down') {
    arrowIcon.className = 'fas fa-angle-up';
  }
});

// Show Time Start
setInterval(showTime, 1000);
function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let currentTime = `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${
    s < 10 ? '0' + s : s
  }`;
  headerTime.textContent = currentTime;
  headerDate.textContent = date.toLocaleDateString();
}
let taskCount = 0;
let taskCompletedCount = 0;
let taskArr = [];
let taskObj = {};

//To Add Task Call This Function
const findPlace = (day, hour, task) => {
  if (task === '') {
    return alert('Task Can not be empty');
  } else {
    document.querySelector(`#${day}${hour}`).textContent = task;
    document.querySelector(`#${day}${hour}`).classList.add('item-filled');
    taskCount++;
  }
};

// To Complete Task Function
const completeTask = (e) => {
  if (e.target.textContent === '') {
    // avoid completing empty task
    alert('There is no event to complete');
  } else if (e.target.classList.contains('completed')) {
    // Check if tag has already completed
    alert('You have already completed the task');
  } else {
    // Find event to make change isFinished to true in taskArr
    e.target.classList.add('completed');
    taskCompletedCount++;
    taskTotalComp.textContent = taskCompletedCount;
    taskArr.map((task) =>
      task.myTask === e.target.textContent ? (task.isFinished = true) : task,
    );
    console.log(taskArr);
  }
};

// List all task to add event listener for completed Tasks
addedEvents.forEach((event) => {
  event.addEventListener('click', completeTask);
});

// Main Function
const addTask = (e) => {
  e.preventDefault();
  var daySelection = document.querySelector('.events__select').selectedIndex;
  const day = document.querySelectorAll('.days_option')[daySelection].value;
  var hourSelection = document.querySelector(
    '.events__hours__select',
  ).selectedIndex;
  const hour = document.querySelectorAll('.hours_option')[hourSelection].value;
  const myTask = task.value;
  // Add to task information to array to save it local storage;
  taskObj = { hour, day, myTask, isFinished: false };
  taskArr.push(taskObj);
  console.log(taskArr);
  findPlace(day, hour, myTask);

  taskNum.textContent = taskCount;
  taskTotalTime.textContent = taskCount * 2;
  task.value = '';
};

submitTask.addEventListener('click', addTask);
