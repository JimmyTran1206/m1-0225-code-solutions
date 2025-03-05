# css-layout-classes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do two div elements "vertically stack" on one another by default?
  > Because the document is rendered line-by-line, and `div` is a block element, thus it takes up the whole page width by default. The next element has to go on next line below the previous block element.
- What is the default `flex-direction` of an element with `display: flex`?

  > `flex-direction` only work after we declare `display:flex`. By default, `flex-direction` is set to `row`, which causes all flex elements to scramble up into whatever space available.

- What are the three primary components of a page layout? (Which helper classes do you need?)

  > `row`, `column`, and `container`

- What is the minimum number of **columns** that you should put in a **row**?

  > the minimum is 1

- What is the purpose of a **container**?
  > the class `container` groups help HTML elements stay together in a place for styling. Many styles allied on `container` are inherited by its child element.

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
