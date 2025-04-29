'use strict';
const $message = document.querySelector('.message');
if (!$message) throw new Error('cannot find message element');
setTimeout(() => {
  $message.textContent = 'Hello there!';
}, 2000);
