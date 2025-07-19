# 📘 JavaScript Core Concepts – Explained with Code

This document explains core JavaScript concepts such as strings, variable declarations, null vs undefined, symbols, and BigInt, along with code examples and behavior.

## 🧵 String Literals

JavaScript supports three ways to define string literals:

```js
let singleQuote = 'Single quoted';
let doubleQuote = "Double quoted";
let backtick = `Backtick with interpolation`;
let name = 'Aseem';
console.log(`Hello, ${name}`); // Output: Hello, Aseem
```

text

✅ Use backticks for template literals and multi-line strings.

## 🧠 Variable Names & Reserved Keywords

Avoid using JavaScript reserved keywords like `let`, `const` as variable names.

```js
let name1 = 'Aseem';
let = 'Anonymous 1'; // ✅ Works in sloppy mode, ❌ Not valid in strict mode
let name2 = 'Pradhan';
// const = 'Anonymous 2'; // ❌ SyntaxError
```

text

⚠️ Using reserved keywords as variable names may lead to unexpected errors.

## 🟨 null vs undefined

| Type | Meaning | Example |
|------|---------|---------|
| `undefined` | Variable declared but not assigned any value | `let a;` |
| `null` | Assigned intentionally to denote "no value" | `let a = null;` |

let test1; // undefined
let test2 = null; // null
let test3 = undefined; // undefined

text

✅ `null` is intentional; `undefined` means uninitialized.

## 🔣 Symbol – Unique and Immutable Identifiers

Symbols are used to create unique object keys that do not clash.

```js
let rollNo1 = Symbol("rollNo");
let rollNo2 = Symbol("rollNo");

console.log(rollNo1 === rollNo2); // false

// They are useful for hidden properties in objects:

let student = {
name: "Aseem"
};

student.rollNo = 1; // Normal property

let u1 = Symbol("id");
student[u1] = "001";

console.log(student); // Symbol property won't appear in normal logs```


// Another example with an object:

let obj = {
id: 1,
name: "xuz",
email: "suz@gmail.com"
};

let uniqueId = Symbol("id");
obj[uniqueId] = "001";
obj["other"] = "002";

console.log(obj);
```

⚠️ Symbol-keyed properties are not shown in `JSON.stringify()` or `for...in` loops.

## 🧮 BigInt – Working with Large Numbers

JavaScript's `Number.MAX_SAFE_INTEGER` is the largest integer where precision is guaranteed.

let n1 = Number.MAX_SAFE_INTEGER;
console.log(n1); // 9007199254740991
console.log(typeof n1); // number

text

Beyond this, results may be unreliable:

```js
console.log(n1 + 1); // 9007199254740992
console.log(n1 + 2); // 9007199254740993
console.log(n1 + 3); // 9007199254740994
console.log(n1 + 4); // 9007199254740995
console.log(n1 + 5);
console.log(n1 + 6);
console.log(n1 + 7);
console.log(n1 + 8);
```

⚠️ The results may become imprecise with normal Number type.

### ✅ Using BigInt

Use `n` at the end of a number to make it a BigInt:

```js
let n2 = 9007199254740991n;
console.log(typeof n2); // bigint

console.log(n2 + 1n); // 9007199254740992n
console.log(n2 + 2n); // 9007199254740993n
console.log(n2 + 3n);
console.log(n2 + 4n);
console.log(n2 + 5n);
console.log(n2 + 6n);
console.log(n2 + 7n);
console.log(n2 + 8n);
```

🚫 Mixing BigInt and Number will cause a TypeError:

```js
// console.log(n1 + 1n); // ❌ TypeError
```

text

## ✅ Summary Table

| Concept | Details |
|---------|---------|
| **String** | Use `' '`, `" "`, or `` ` ` ``; backticks allow interpolation. |
| **Variables** | Avoid using reserved words (`let`, `const`) as variable names. |
| **null** | Represents intentional absence of value. |
| **undefined** | Automatically assigned to declared but uninitialized variables. |
| **Symbol** | Creates unique, hidden keys for object properties. |
| **BigInt** | Use for integers larger than 2^53 - 1; append `n` to the number. |
| **Mixing Types** | 🚫 Do not mix BigInt and Number. Use explicit conversion if needed. |

## 📌 Final Notes

- JavaScript dynamically handles types but understanding the underlying behavior helps avoid bugs.
- Use **Symbol** for safe object extension.
- Use **BigInt** for financial or scientific calculations needing high precision.
- Always follow best practices when naming variables to ensure code clarity and maintainability.

## 🧪 Complete Code Example

Here's a comprehensive code example demonstrating all the concepts:
