
# JavaScript Type Conversion and Truthy/Falsy Values - Notes

## 1. Automatic Type Conversion (Type Coercion)

JavaScript automatically converts data types when performing operations between different types.

### String + Number (`+` operator)
- When one operand is a string and the other is a number, the number is converted to a string, and the operation becomes string concatenation.

```
console.log("5" + 1);  // Output: "51"
// Explanation: 1 is converted to "1" and concatenated with "5" -> "51"
```

### String - Number (`-` operator)
- For operators other than `+`, JavaScript tries to convert operands to numbers.

```
console.log("5" - 1);  // Output: 4
// Explanation: "5" is converted to 5, then subtraction happens
```

---

## 2. Falsy Values in JavaScript

The following values are considered **falsy** in JavaScript (i.e., coerced to `false` in boolean contexts like `if` statements):

- `0`
- `false`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`
- `document.all` (special case, treated as falsy)

Example:

```
if (null) {
  console.log("true");
} else {
  console.log("false");  // this will run because null is falsy
}
```

---

## 3. Boolean to Number Conversion and Concatenation with Strings

### Boolean arithmetic

- `true` is converted to `1`
- `false` is converted to `0`

```
console.log(true + false);  // Output: 1 (1 + 0)
```

### Boolean concatenation with strings using `+`

```
console.log("" + true);   // Output: "true"
console.log("" + false);  // Output: "false"
```

---

## 4. Operations involving `NaN` and `undefined`

- Any arithmetic operation involving `NaN` and/or `undefined` results in `NaN`:

```
console.log(NaN + undefined);  // Output: NaN
console.log(undefined + NaN);  // Output: NaN
```

---

# Summary

| Operation         | Result Type               | Explanation                                     |
|-------------------|---------------------------|------------------------------------------------|
| `"5" + 1`         | String                    | Number converted to string and concatenated    |
| `"5" - 1`         | Number                    | String converted to number for subtraction     |
| `true + false`    | Number                    | Boolean converted to numbers (1 + 0 = 1)       |
| `"" + true`       | String                    | Boolean converted to string for concatenation  |
| `NaN + undefined` | Number (`NaN`)            | Result is `NaN` due to invalid arithmetic       |
| `if(null)`        | Falsy                     | `null` is falsy, so condition fails            |

---


```
Keep these rules in mind to better understand implicit type conversions in JavaScript!
```