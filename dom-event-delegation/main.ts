const $taskList = document.querySelector<HTMLElement>('.task-list');
if (!$taskList) throw new Error('Error! Cannot query task list');
$taskList.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;
  console.log('event target: ', eventTarget);
  console.log('event target tagName: ', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const $targetParents = eventTarget.closest(
      '.task-list-item'
    ) as HTMLElement;
    if (!$targetParents)
      throw new Error('Cannot find the parent for this button!');
    console.log('closet parents: ', $targetParents);
    $targetParents.remove();
  }
});
