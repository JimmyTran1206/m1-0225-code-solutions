'use strict';
const $openModelBtn = document.querySelector('.open-modal');
const $dismissModalBtn = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');
if (!$dialog || !$dismissModalBtn || !$openModelBtn)
  throw new Error('Error. Unable to query elements');
$openModelBtn.addEventListener('click', () => {
  $dialog.show();
});
$dismissModalBtn.addEventListener('click', () => {
  $dialog.close();
});
