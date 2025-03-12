# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?
  > `static`
- How does setting `position: relative` on an element affect document flow?
  > The element is still in the document flow, but it can be offset from to its current `static` position
- How does setting `position: relative` on an element affect where it appears on the page?

  > The element can be offset by setting values for `left`, `right`,`top`, and `bottom`

- How does setting `position: absolute` on an element affect document flow?

  > The element is removed from the flow and pegged to then nearest `relative` positioned ancestor element.

- How does setting `position: absolute` on an element affect where it appears on the page?

  > it appears as if it was floating over the content

- How do you constrain an absolutely positioned element to a containing block?

  > make that block position `relative`

- What are the four box offset properties?
  > `left`, `right`,`top`, and `bottom`

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
