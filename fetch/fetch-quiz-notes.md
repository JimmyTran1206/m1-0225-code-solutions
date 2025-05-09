# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?

  > a promise

- What is the default request method used by `fetch()`?

  > GET method

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?

  > using an object `{method: 'methodName'}` as a second argument to `fetch()`

- How does `fetch` report errors?
  > `fetch()` only reports error if the connection fail half way. It does not report error such as server error 5xx or not found error 404. Thus, we have to check the `res.ok` before parsing the request to json.

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
