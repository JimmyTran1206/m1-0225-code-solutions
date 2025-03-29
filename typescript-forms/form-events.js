'use strict';
function handleFocus(event) {
  console.log('Focus event was fired');
  const eventTarget = event.target;
  console.log('event target:', eventTarget.name);
}
function handleBlur(event) {
  console.log('Blur event was fired');
  const eventTarget = event.target;
  console.log('event target:', eventTarget.name);
}
function handleInput(event) {
  console.log('Focus event was fired');
  const eventTarget = event.target;
  console.log('event target:', eventTarget.name);
  console.log('target value: ', eventTarget.value);
}
const $name = document.querySelector('#user-name');
const $email = document.querySelector('#user-email');
const $message = document.querySelector('#user-message');
if (!$name || !$email || !$message) throw new Error('elements do not exist');
$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);
$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);
$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
