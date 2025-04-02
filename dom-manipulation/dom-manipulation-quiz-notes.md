# dom-manipulation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `className` property of element objects?

  > get/set the `class` attribute of HTML element.

- How do you update the CSS class attribute of an element using JavaScript?

  > use `className` attribute or `classList.add`

- What is the `textContent` property of element objects?

  > get/set the text content of the element

- How do you update the text within an element using JavaScript?

  > use `$element.textContent = 'new content'`

- Is the `event` parameter of an event listener callback always useful?

  > sometimes we do not need to bother the `event` object.

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?

  > without using a variable to keep track of the click count, the program is stateless. It would be more complicated and eventually we will need a variable to keep track of the state of the program so that the button can change color

- Why is storing information about a program in variables better than only storing it in the DOM?
  > we can keep track of the state of the program, as well as keep track of what happening on the DOM.

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
