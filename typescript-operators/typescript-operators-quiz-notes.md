# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

  > they are short-circuit operators and can be used outside `if` statement to form expressions and do value assignments.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

  > in short-circuit evaluation, JavaScript engine only evaluate first side of the expression and the other side is optional depending on the results of the first side.
  > in `expr1 && expr2`, if `expr1` is falsy, JS will not evaluate `expr2`
  > in `expr1 || expr2`, if `expr1` is truthy, JS will not evaluate `expr2`.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

  > essentially, `??` behaves the same as `||`, with exception that it only works with `undefined` and `null`, not all falsy values.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

  > `?:` implement simple branching expression that returns a value while `if/else` is a statement that does not return a value. `if/else` is suitable to implement more sophisticated logics than `?:`

- What is the `?.` (optional chaining) operator? When would you use it?

  > it is a save way to avoid throwing errors and hanging the program execution because of `undefined` or `null` reference.

- What is `...` (spread) syntax? How do you use it with arrays and objects?

  > essentially `...` spreads out the elements of an array or property-value pairs of an object. We can use spread operator to copy arrays/objects or to form a new array/object from existing ones.

- What data types can be spread into an array? Into an object?

  > primitive data and data with enumerable properties.

- How does spread syntax differ from rest syntax?
  > In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
