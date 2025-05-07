# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?

  > all the asynchronous actions (actions that takes time) are put into a queue. When synchronous codes finish execution, the Event Loop look at the queue and execute the callbacks in the queue.

- What are the three states a Promise can be in?

  > pending, resolve, reject

- How do you handle the fulfillment of a Promise?

  > using `then` clause

- How do you handle the rejection of a Promise?
  > using `catch` clause

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
