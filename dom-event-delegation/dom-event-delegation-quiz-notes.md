# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

  > The element on which the event is happening

- Why is it possible to listen for events on one element that actually happen its descendent elements?

  > because of the event bubbling

- What DOM element property tells you what type of element it is?

  > `tagName` property

- What does the `element.closest()` method take as its argument and what does it return?

  > it takes in a selector and return the closet parent element that matches such selector

- How can you remove an element from the DOM?

  > use `remove()` method on that element itself

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  > add the event to the parent element on which the new element is appended. Event bubbling will make sure that the parent element can listen to the event.

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
