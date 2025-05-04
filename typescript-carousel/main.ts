const $images = document.querySelectorAll('.image');
if (!$images) throw new Error('cannot find images');
const $circles = document.querySelectorAll('.circle');
if (!$circles) throw new Error('cannot find images');

let currentIndex: number = 0; // control variable for the current view
// function to show the current view of image and circles matching the index
function showView(index: number): void {
  $images.forEach((image, i) => {
    i === index
      ? image.classList.remove('hidden')
      : image.classList.add('hidden');
  });
  $circles.forEach((circle, i) => {
    if (i === index) {
      circle.classList.remove('fa-regular');
      circle.classList.add('fa-solid');
    } else {
      circle.classList.add('fa-regular');
      circle.classList.remove('fa-solid');
    }
  });
}

// Auto stepping every 3 seconds
setInterval(() => {
  if (currentIndex > 4) {
    currentIndex = 0;
  }
  showView(currentIndex);
  currentIndex++;
}, 3000);

// binding clicks to events
const $container = document.querySelector('.container');
if (!$container) throw new Error('cannot find container');
$container.addEventListener('click', (e: Event) => {
  const eventTarget = e.target as HTMLElement;
  // clicking on circles
  if (eventTarget.classList.contains('circle')) {
    currentIndex = Number.parseInt(eventTarget.dataset.view!);
    showView(currentIndex);
  }
  // arrow clicking: need to take care of the index incremental inside setInterval
  // clicking on left arrow
  if (
    eventTarget.classList.contains('arrow-left') ||
    eventTarget.classList.contains('fa-chevron-left')
  ) {
    // set the currentIndex to the current view
    $circles.forEach((element, i) => {
      if (element.classList.contains('fa-solid')) {
        currentIndex = i;
      }
    });
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = 4;
    }
    showView(currentIndex);
  }
  // clicking on right arrows
  if (
    eventTarget.classList.contains('arrow-right') ||
    eventTarget.classList.contains('fa-chevron-right')
  ) {
    // set the currentIndex to the current view
    $circles.forEach((element, i) => {
      if (element.classList.contains('fa-solid')) {
        currentIndex = i;
      }
    });
    currentIndex++;
    if (currentIndex > 4) {
      currentIndex = 0;
    }
    showView(currentIndex);
  }
});
