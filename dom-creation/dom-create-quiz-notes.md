# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?

  > nope, it just create a model of HTML element as an object in JavaScript.

- How do you add an element as a child to another element?

  > use the `appendChild()` method

- What do you pass as the arguments to the `element.setAttribute()` method?

  > a string of attribute name and a string of attribute value, separated by a comma.

- What steps do you need to take in order to insert a new element into the page?

  > 1. make a real HTML element in the `index.html`
  > 2. select that real HTML element as an object in JavaScript
  > 3. make new DOM element in JavaScript
  > 4. append the new element to the real HTML element by calling `appendChild()` method on the real element.
  > 5. watch magic happens

- What is the `textContent` property of an element object for?

  > insert a text content in HTML element

- Name two ways to set the `class` attribute of a DOM element.

  > use `className` property, or use `setAttribute('class', '...')`

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  > it is reusable
  > it ensure encapsulation and prevent users tampering with the frontend.

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
