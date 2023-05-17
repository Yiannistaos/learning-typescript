# Learning TypeScript

TypeScript is a statically-typed superset of JavaScript that adds type annotations and other language features, and compiles to plain JavaScript code. The examples below are from [this](https://dev.to/ruppysuppy/7-secret-typescript-tricks-pros-use-3ckg) article.

## Initialize a Node.js project and install TypeScript.

```bash
npm init -y
npm install --save-dev typescript
```

## Compile

```bash
npm run tsc src/index.ts
```

## Nodemon

Watch the console logs dyring typing in `src/index.ts` file.

```
nodemon dist/index.js
```
