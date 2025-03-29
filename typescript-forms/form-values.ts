interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $form = document.querySelector('#contact-form') as HTMLFormElement;
if (!$form) throw new Error('elements do not exist');
$form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  const $formElements = $form.elements as FormElements;
  const output: Record<string, string> = {};
  output.name = $formElements.name.value;
  output.email = $formElements.email.value;
  output.message = $formElements.message.value;
  console.log(`message data:`, output);
  $form.reset();
});
