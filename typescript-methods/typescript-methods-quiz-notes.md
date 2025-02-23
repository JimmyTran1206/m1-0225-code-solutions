# typescript-methods-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

  > use `log` method of `console` object

- What is a method?

  > a set of code that is usually defined as function, within an object to perform specific tasks.

- How is a method different from any other function?

  > method is attached to a specific object. A general function is floating around- I believe that a general function is attached to the global `Window` object from the browser.

- How do you remove the last element from an array?

  > use `pop()` method

- How do you round a number down to the nearest integer?

  > use `Math.floor()` method

- How do you generate a random number?

  > use `Math.random()` method to generate a random number between `[0,1)` and scale up the range when needed.

- How do you delete an element from an array?

  > use `splice(index, number of element to delete)`

- How do you append an element to an array?

  > use `push()` method to append to the end, `unshift()` method to append to the start.

- How do you break a string up into an array?

  > use `split()` method

- Do string methods change the original string? How would you check if you weren't sure?

  > Nope, strings are immutable in JavaScript. We can check by logging the original string to the console.

- Is the return value of a function or method useful in every situation?

  > Not really. Many functions and methods are designed to perform some specific task without rerturning any value.

- How do you get a collection of an objects keys?
  > use `Object.keys`
- How do you get a collection of an objects values?
  > use `Object.values`
- How do you get a collection of both an objects keys and values?
  > use `Object.entries`

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
