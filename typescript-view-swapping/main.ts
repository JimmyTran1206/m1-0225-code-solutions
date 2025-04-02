const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('.view');
if (!$tabContainer || !$tabs || !$views)
  throw new Error('elements do not exist');
$tabContainer.addEventListener('click', (e: Event) => {
  const $eventTarget = e.target as HTMLDivElement;
  if ($eventTarget.matches('.tab')) {
    $tabs.forEach((element) => {
      const currentElement = element as HTMLElement; // type cast to use dataset attribute
      if (currentElement === $eventTarget) {
        currentElement.classList.add('active');
        const dataViewValue: string | undefined = currentElement.dataset.view;
        if (dataViewValue) {
          $views.forEach((element) => {
            const currentElement = element as HTMLElement;
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
