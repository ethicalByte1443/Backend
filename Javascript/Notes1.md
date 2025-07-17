# 📘 JavaScript Variable Declarations: `var`, `let`, and `const`

This guide clarifies the **confusing behaviors** of JavaScript variable declarations: `var`, `let`, and `const`. These are essential to understand as they directly impact scoping, hoisting, re-declaration, and window object binding.

---

## 🧠 Table of Contents

1. [Declaration vs Initialization](#declaration-vs-initialization)
2. [`var` Explained](#var-explained)
3. [`let` Explained](#let-explained)
4. [`const` Explained](#const-explained)
5. [Scoping Differences](#scoping-differences)
6. [Hoisting Behavior](#hoisting-behavior)
7. [Block Scope vs Function Scope](#block-scope-vs-function-scope)
8. [Common Mistakes](#common-mistakes)
9. [Function Example with Block Scope](#function-example-with-block-scope)

---

## ✅ Declaration vs Initialization

```js
let a;
console.log(a); // Output: undefined

const b;
// ❌ SyntaxError: Missing initializer
```

- `let` and `var` allow declaration without initialization.
- `const` **must** be initialized at the time of declaration.

---

## 🟡 `var` Explained

```js
var a = 12;
console.log(a); // Output: 12

var a = 20;     // ✅ Redeclaration allowed
console.log(a); // Output: 20
```

- **Function Scoped**
- **Can be re-declared**
- Added to the **global window object** when declared in global scope
- **Hoisted** (moved to the top with value `undefined`)

---

## 🔵 `let` Explained

```js
let a = 12;
let a = 20; // ❌ SyntaxError: Identifier 'a' has already been declared
```

- **Block Scoped**
- Cannot be re-declared in the same scope
- **Not added to the window object**
- Hoisted but **not initialized**, so using before declaration gives `ReferenceError`

---

## 🔴 `const` Explained

```js
const dulha = "Lab";
dulha = "Bride"; // ❌ TypeError: Assignment to constant variable.
```

- **Block Scoped**
- Must be **initialized** during declaration
- Cannot be re-declared or updated

---

## 🔁 Scoping Differences

### 🔸 `var` is function scoped

```js
var x = "aseem";

{
  console.log(x);  // Output: aseem
  var y = "pradhan";
  console.log(y);  // Output: pradhan
}

console.log(x); // Output: aseem
console.log(y); // Output: pradhan ✅ Available outside block
```

### 🔹 `let` is block scoped

```js
let naam = "aseem";

{
  console.log(naam);  // Output: aseem
  naam = "ASEEM";
  let surname = "pradhan";
}

console.log(naam);     // Output: ASEEM
console.log(surname);  // ❌ ReferenceError: surname is not defined
```

---

## 🚀 Hoisting Behavior

| Feature     | `var`           | `let`               | `const`             |
|-------------|------------------|----------------------|----------------------|
| Hoisted     | ✅ Yes            | ✅ Yes               | ✅ Yes               |
| Initialized | ❌ Undefined only | ❌ No (TDZ error)     | ❌ No (TDZ error)     |
| Redeclare   | ✅ Yes            | ❌ No                | ❌ No                |

> ⚠️ TDZ: Temporal Dead Zone - period between hoisting and actual declaration.

---

## 🧱 Block Scope vs Function Scope

```js
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ Works
}

function testLet() {
  if (true) {
    let y = 20;
  }
  console.log(y); // ❌ ReferenceError
}
```

---

## ⚠️ Common Mistakes

### ❌ Redeclaring `let` or `const`

```js
let a = 10;
let a = 20; // ❌ Error

const b = 30;
b = 40;     // ❌ Error
```

### ❌ Using `const` without initialization

```js
const x; // ❌ SyntaxError
```

---

## 🧪 Function Example with Block Scope

```js
function abcd() {
  let x = 10;

  if (x >= 20) {
    console.log(x + " is greater than 20");
  } else {
    console.log(x + " is less than 20");
    x = Math.floor(Math.random() * 100) + 20;
    let y = 10; // Scoped only inside this block
  }

  console.log("New Value for x: " + x);
  console.log(y); // ❌ ReferenceError: y is not defined
}

abcd();
```

---

## ✅ Summary Table

| Feature                | `var`        | `let`        | `const`      |
|------------------------|--------------|--------------|--------------|
| Scope                  | Function     | Block        | Block        |
| Redeclaration Allowed  | ✅ Yes        | ❌ No         | ❌ No         |
| Reassignment Allowed   | ✅ Yes        | ✅ Yes        | ❌ No         |
| Hoisted                | ✅ Yes        | ✅ Yes        | ✅ Yes        |
| Initialized on Hoist   | ✅ undefined  | ❌ No         | ❌ No         |
| Global Window Binding  | ✅ Yes        | ❌ No         | ❌ No         |

---

## 💡 Pro Tips

- Always prefer `let` or `const` in modern JS.
- Use `const` by default, and `let` only when reassignment is required.
- Avoid `var` unless needed for legacy code or specific function-scope behavior.
- Understand scoping to avoid unexpected bugs, especially in loops and callbacks.

---

## 📚 Additional Reading

- [MDN: var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [MDN: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN: const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
