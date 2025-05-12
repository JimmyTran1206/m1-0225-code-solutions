# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?

  > `async` is used to declare a function as asynchronous, which always return a Promise. `await` is used to pause the execution of an `async` function until a Promise is resolved/rejected.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?

  > `async` and `await` read more like synchronous codes, allows for more logics and error handling

- When do you use `async`?

  > use `async` to define a function that contains `await` or returns a `Promise`

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)

  > use `await` to pause async execution until the promise is resolved/reject. Do not use `await` in synchronous functions be cause it has not effect of "waiting".

- How do you handle errors with `await`?

  > using the `catch` phase in a `try-catch` block

- What do `try`, `catch` and `throw` do? When do you use them?

  > `try`: wrap code that may throw error
  > `catch`: process the errors propagated from the `try` block
  > `throw`: usually used to throw an `Error` object that can be caught and process, prevent program breakdowns and stops.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

  > Without `await`, the code continue to execute without waiting for Promise resolve/reject. The Promise rejection will not be caught by `catch()` clause, which will result in program errors and early termination.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  > The callback is usually used in `XMLHttpRequest` api, which might lead to callback hells. I am not in favor of this.
  > The `Promise.then`is used in `fetch()` api, which brings the callbacks into multiple `then` clauses. When using this, I usually forget what the previous `then` clause returns
  > The `async/await` is syntactical sugar over Promise.then, which makes the code look like synchronous. This is my most favorite style. However, when I forget an `await`, it usually leads to bad codes with hard time to debug.

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
