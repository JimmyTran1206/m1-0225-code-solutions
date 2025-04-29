'use strict';
const $countDown = document.querySelector('.countdown-display');
if (!$countDown) throw new Error('cannot find count-down element');
let count = Number.parseInt($countDown.textContent);
const intervalId = setInterval(() => {
  if (count === 1) {
    $countDown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  } else {
    $countDown.textContent = (--count).toString();
  }
}, 1000);
