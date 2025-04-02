'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('Error! Cannot query task list');
$taskList.addEventListener('click', (event) => {
  const eventTarget = event.target;
  console.log('event target: ', eventTarget);
  console.log('event target tagName: ', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const $targetParents = eventTarget.closest('.task-list-item');
    if (!$targetParents)
      throw new Error('Cannot find the parent for this button!');
    console.log('closet parents: ', $targetParents);
    $targetParents.remove();
  }
});
