# javascript-functions-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a function in JavaScript?
  > A block of re-usuable codes that perform specific tasks and may or may not return value.
- Describe the parts of a function **definition**.

  > `function` keyword (or fat lambda `==>`), function name (optional), parameter list in `()`, return type, and code block in `{}`

- Describe the parts of a function **call**.

  > use function name and pass in appropriate arguments between `()`.

- When comparing them side-by-side, what are the differences between a function **call** and a function **definition**?

  > Function call does not use `function` keyword or fat lambda `=>` operator. Function call passed in arguments while function definition declares parameters. Anonymous function cannot be explicitly called but need to be explicitly defined.

- What is the difference between a **parameter** and an **argument**?

  > Parameters are declared upon function definition while arguments are values passed upon function called

- Why are function **parameters** useful?

  > parameters allow function to receive data from outside function definition.

- What two effects does a `return` statement have on the behavior of a function?

  > return a value and terminiate function execution, return control to the process that called such function.

- What is the syntax for defining an arrow function?
  ` const functionName:type= (parameters)=>{ code block }`

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  > Without `{}`, we can only limit arrow function to return a value and no other further logic is allowed.

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
