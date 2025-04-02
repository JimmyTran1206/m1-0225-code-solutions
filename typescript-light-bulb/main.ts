const $container = document.querySelector<HTMLElement>('.container');
const $bulb = document.querySelector<HTMLElement>('.bulb');
$bulb?.addEventListener('click', () => {
  $container?.classList.toggle('dark');
  $bulb.classList.toggle('off');
});
