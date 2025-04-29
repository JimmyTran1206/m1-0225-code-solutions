# typescript-timers-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a "callback" function?

  > a callback is a function passed as an argument to another function

- Besides adding an event listener callback function to an element or the `document`, what is one way to delay the execution of a JavaScript function until some point in the future?

  > use the `setTimeOut()` function

- How can you set up a function to be called repeatedly without using a loop?

  > use the `setInterval()` function

- What is the default time delay if you omit the `delay` parameter from `setTimeout()` or `setInterval()`?

  > the default delay is 0s. The callback will be executed as soon as possible

- What do `setTimeout()` and `setInterval()` return?
  > `setTimeout()` and `setInterval()` both return a numeric, non-zero value, which is the ID of the timer they create. This ID can be used to cancel the timer using `clearTimeout()` for `setTimeout()` and `clearInterval()` for `setInterval()`.

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
