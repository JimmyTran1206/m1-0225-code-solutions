# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

  > for element inspection and code debugging

- What is the purpose of events and event handling?

  > event: an object holding all properties of an events happening on document
  > event handling: a registered callback function instructing the browser what to do when an event happens

- Are all possible parameters required to use a JavaScript method or function?

  > not all parameters are required. Parameters without an associated argument will be set to `undefined` or a default value

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

  > `addEventListener()`

- What is a callback function?

  > a function registered in advance and will be called later. This registered function is then passed as an argument to another function/method

- What object is passed into an event listener callback when the event fires?

  > The `Event` object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

  > the HTML element on which an event happens. When unsure, log the target and check their properties.

- What is the difference between these two snippets of code?

  ```js
  element.addEventListener('click', handleClick);
  ```

  > This syntax is the correct way to add an event listener to the object. The callback will be executed when a `click` event happening on the `element`.

  ```js
  element.addEventListener('click', handleClick());
  ```

  > This syntax is an correct way to add an event listener to the object and will likely result in errors. The callback is not registered but is called immediately when JavaScript read to this line. Since no callback is registered, when the event happens, nothing is called.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
