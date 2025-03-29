'use strict';
const $form = document.querySelector('#contact-form');
if (!$form) throw new Error('elements do not exist');
$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const $formElements = $form.elements;
  const output = {};
  output.name = $formElements.name.value;
  output.email = $formElements.email.value;
  output.message = $formElements.message.value;
  console.log(`message data:`, output);
  $form.reset();
});
