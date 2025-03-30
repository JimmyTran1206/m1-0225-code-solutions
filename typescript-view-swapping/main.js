'use strict';
const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('.view');
if (!$tabContainer || !$tabs || !$views)
  throw new Error('elements do not exist');
$tabContainer.addEventListener('click', (e) => {
  const $eventTarget = e.target;
  if ($eventTarget.matches('.tab')) {
    $tabs.forEach((element) => {
      const currentElement = element; // type cast to use dataset attribute
      if (currentElement === $eventTarget) {
        currentElement.classList.add('active');
        const dataViewValue = currentElement.dataset.view;
        if (dataViewValue) {
          $views.forEach((element) => {
            const currentElement = element;
            currentElement.dataset.view === dataViewValue
              ? currentElement.classList.remove('hidden')
              : currentElement.classList.add('hidden');
          });
        }
      } else {
        element.classList.remove('active');
      }
    });
  }
});
