# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  > For debugging and element/data inspection
- What is a "model"?
  > "model" is a structural representation of data
- Which "document" is being referred to in the phrase Document Object Model?
  > "document" HTML document that the DOM represents
- What is the word "object" referring to in the phrase Document Object Model?
  > "object": each element/node in HTML are represented as a JavaScript object
- What is a DOM Tree?
  > "DOM Tree": hierarchy of nodes. THe root of the tree is `document` object
- Give two examples of `document` methods that retrieve a single element from the DOM.
  > `document.getElementById()` and `document.querySelector()`
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  > `document.querySelectorAll()`
- Why might you want to assign the return value of a DOM query to a variable?
  > improve performance and avoid repetitive querying and transversing the DOM tree
- What `console` method allows you to inspect the properties of a DOM element object?
  > `console.dir()`
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  > So that the HTML document can be rendered before any querying in JS file is executed
- What does `document.querySelector()` take as its argument and what does it return?
  > argument: a CSS selector. Return: an object represent the first match, or `null`
- What does `document.querySelectorAll()` take as its argument and what does it return?
  > argument: a CSS selector. Return: a `NodeList`

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
