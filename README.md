# Codewars TypeScript Workspace

Minimal repo for solving Codewars challenges in TypeScript.

---

## 📁 Folder structure

```
codewars-ts/
├─ src/
│  ├─ 001-count-vowels/
│  │   ├─ index.ts      # task code
│  │   └─ test.ts       # local tests, e.g. copied from Codewars
│  ├─ 002-some-other/
│  │   ├─ index.ts
│  │   └─ test.ts
│  └─ ...
├─ tsconfig.json
├─ package.json
└─ README.md
```

- Each task in a separate folder (`001-`, `002-` etc.)  
- `index.ts` → function / solution  
- `test.ts` → local tests

---

## ⚡ Installation

```bash
git clone <repo-url>
cd codewars-ts
npm install
```

---

## 🛠 Running code

### 1. Run the task directly

```bash
npx ts-node src/001-count-vowels/index.ts
```

### 2. Compile to JS

```bash
npx tsc
```

- All TS files from the `src/` folder will be compiled to `dist/`

### 3. Run local tests

```bash
npx ts-node src/001-count-vowels/test.ts
```

---

## ✅ Example task

`src/001-count-vowels/index.ts`:

```ts
export function countVowels(str: string): number {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
```

`src/001-count-vowels/test.ts`:

```ts
import { countVowels } from './index';

console.log(countVowels("hello world") === 3);
console.log(countVowels("abc") === 1);
console.log(countVowels("aeiou") === 5);
console.log(countVowels("bcdfg") === 0);
```

- You can copy tests from Codewars and run them locally

---

## 📝 package.json (minimal example)

```json
{
  "name": "codewars-ts",
  "version": "1.0.0",
  "description": "Minimal TypeScript workspace for Codewars",
  "main": "dist/index.js",
  "scripts": {
    "start": "ts-node",
    "build": "tsc"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "ts-node": "^10.9.1",
    "@types/node": "^20.0.0"
  }
}
```

---

## 🛠 tsconfig.json (minimal)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "outDir": "dist"
  },
  "include": ["src"]
}
```

---

## 💡 Tips

1. Create folders for tasks with numbering, e.g. `001-`, `002-`, to easily track progress.  
2. In `index.ts` **export the solution function**:

```ts
export function myFunction(...) { ... }
```

3. In `test.ts` **import the function from `index.ts` and check its behavior**:

```ts
import { myFunction } from './index';
console.log(myFunction(...) === expected);
```

4. After finishing a task, you can copy **only `index.ts`** to Codewars.  

5. If you want professional tests, you can add **Jest + ts-jest** later.

---

## 🎯 Summary

- Minimal TS environment  
- Separate folders for each task  
- Ability to copy and run tests from Codewars  
- `ts-node` allows running TS without compilation  
