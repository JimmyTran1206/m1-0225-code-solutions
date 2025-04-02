'use strict';
const $container = document.querySelector('.container');
const $bulb = document.querySelector('.bulb');
$bulb?.addEventListener('click', () => {
  $container?.classList.toggle('dark');
  $bulb.classList.toggle('off');
});
