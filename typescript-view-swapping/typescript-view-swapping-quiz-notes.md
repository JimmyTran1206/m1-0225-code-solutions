# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

  > the element on which the event happens

- What is the effect of setting an element to `display: none`?

  > the element is hidden in the browser view but still available in the HTML document

- What does the `element.matches()` method take as an argument and what does it return?

  > argument: a css selector. return: boolean `true` if the calling element can be queried using the argument css selector, otherwise return boolean `false`

- How can you retrieve the value of an element's attribute?

  > use `getArttribute()` method

- At what steps of the solution would it be helpful to log things to the console?

  > for TypeScript, it would be beneficial to log element after being queried to inspect the element type and associated methods.

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?

  > without event delegation/bubbling, we will have to add separate event listener for every child element added

- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?
  > we have to query all elements, make all elements hidden, the select the element that we want to show, and repeat the process for each click event.

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
