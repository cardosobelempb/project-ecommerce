# Start

```bash
npx create-next-app@latest .
npm install shadcn --save-dev
npx shadcn init
npx shadcn@latest add button
```

# Prettier

```bash
 npm install -D prettier prettier-plugin-tailwindcss
```
- .prettierrc
```
{
  "plugins": [
    "prettier-plugin-tailwindcss"
  ]
}
```

# Eslint

```bash
 npm install --save-dev eslint-plugin-simple-import-sort
```
- eslint.config.js 
```
{
  "plugins": ["simple-import-sort"],
  "rules": {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": "latest"
  }
}
```

- Exempla
```
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];
```