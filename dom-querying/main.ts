const $h1 = document.querySelector<HTMLElement>('h1');
console.log($h1);
console.dir($h1);

const $explanation = document.querySelector<HTMLElement>('#explanation');
console.log($explanation);
console.dir($explanation);

const $hint = document.querySelector<HTMLElement>('.hint');
console.log($hint);
console.dir($hint);

const $paragraph: NodeList = document.querySelectorAll<HTMLElement>('p');
console.log($paragraph);

const $exampleLink: NodeList =
  document.querySelectorAll<HTMLElement>('.example-link');
console.log($exampleLink);
