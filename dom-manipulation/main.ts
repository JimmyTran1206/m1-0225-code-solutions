let click = 0;
const $button = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
if (!$button || !$clickCount) throw new Error('Error! Cannot query element');
$button.addEventListener('click', () => {
  $clickCount.textContent = `Clicks:${++click}`;
  if (click > 16) {
    $button.className = `hot-button nuclear`;
  } else if (click > 13) {
    $button.className = `hot-button hot`;
  } else if (click > 10) {
    $button.className = `hot-button warm`;
  } else if (click > 7) {
    $button.className = `hot-button tepid`;
  } else if (click > 4) {
    $button.className = `hot-button cool`; // the question says that the button will change color after 4th click, so it will be 'cool' on the fifth click, not fourth.
  }
});
