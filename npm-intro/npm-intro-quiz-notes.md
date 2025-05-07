# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?

  > Node Package Manager

- What is a package?

  > a small chunk of code solving small but specific issue

- What are some other popular package managers?

  > in JS ecosystem: npm, yarn, pnpm

- How can you create a `package.json` with `npm`?

  > `npm init -y`

- What is a dependency and how do you add one to a package?

  > dependency is the module that we install so the project function properly. We use `npm install package-name`

- What happens when you add a dependency to a package with `npm`?

  > the package is downloaded and the `package.json` is updated

- What is a devDependency and how do you add one to a package?

  > a devDependency is a module needed for development only. To add them, use `npm install --save-dev package-name`

- How do you define and run `npm` scripts? Why are these useful?
  > define using `script` field in `package.json`
  > run using `npm run script-name`
  > it is useful in developing to bundle different and long command into custom command that can be shared among team members.

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
