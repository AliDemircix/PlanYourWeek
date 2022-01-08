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
export default scheduleInner;
