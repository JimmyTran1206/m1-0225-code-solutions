'use strict';
const $clickBtn = document.querySelector('.click-button');
if (!$clickBtn) throw new Error('Error! Button does not exist');
function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
$clickBtn.addEventListener('click', handleClick);
const $hoverBtn = document.querySelector('.hover-button');
if (!$hoverBtn) throw new Error('Error! Button does not exist');
function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
$hoverBtn.addEventListener('mouseover', handleMouseover);
const $dblClickBtn = document.querySelector('.double-click-button');
if (!$dblClickBtn) throw new Error('Error! Button does not exist');
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
$dblClickBtn.addEventListener('dblclick', handleDoubleClick);
