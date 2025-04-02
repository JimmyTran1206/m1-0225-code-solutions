'use strict';
// Input string:
const str = 'grumpy wizards make toxic brew';
// Append input string into html
const $text = document.querySelector('.text');
if (!$text) throw new Error('Element does not exist');
const characters = []; // store the html elements <span>'s
// convert the input text to spans of characters
str.split('').forEach((char) => {
  const $span = document.createElement('span');
  $span.innerText = char;
  $text?.appendChild($span);
  characters.push($span);
});
let i = 0;
characters[0].className = 'default-border';
document.addEventListener('keydown', (event) => {
  const keyboardEvent = event;
  const inputChar = keyboardEvent.key;
  if (inputChar === characters[i].textContent) {
    characters[i].classList.remove('default-border');
    characters[i].classList.remove('wrong-word');
    characters[i].classList.add('right-word');
    try {
      characters[++i].classList.add('default-border');
    } catch {
      const $successMessage = document.createElement('p');
      $successMessage.textContent = 'Good job, you did it!';
      $text.appendChild($successMessage);
    }
  } else {
    characters[i].classList.remove('default-border');
    characters[i].classList.add('wrong-word');
    characters[i].classList.add('jump');
    setTimeout(() => {
      characters[i].classList.remove('jump');
    }, 100);
  }
});
