// String
// ' ' -- >
// " "
// ` `

let name1 = 'Aseem';
let = 'Anonymous 1';              // causing no error (variable name is let)
let name = 'Pradhan';
// const = 'Anonymous 2';           // this will cause error

// --------------------------------------------------------------------------

// null --> ka matlab hai apne jaan bhooj kr koi value nhi di

let test1;              // undefined
let test2 = null        // null
let test3 = undefined;  // undefined


// symbol --> unique immutable value

let student = {
    name : "Aseem"
}

student.rollNo =1;      // problem

let rollNo1 = Symbol("rollNo");
let rollNo2 = Symbol("rollNo");


let obj = {
    id:1,
    name: "xuz",
    email: "suz@gmail.com"
}

console.log(obj);

let u1 = Symbol("id")
obj["other"] = "001";


console.log(obj)

// BigInteger

let n1 = Number.MAX_SAFE_INTEGER;
console.log(n1);
console.log(typeof(n1));
// n1 = n1 + 1;             //   9007199254740991
console.log(n1 + 1);
console.log(n1 + 2);
console.log(n1 + 3);
console.log(n1 + 4);
console.log(n1 + 5);
console.log(n1 + 6);
console.log(n1 + 7);
console.log(n1 + 8);
// not uniform throughout the clg


// console.log(n1 + 1n);           // datatypes.js:62 Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

console.log('********************************')


let n2 = 9007199254740991n;
console.log(typeof(n2));
console.log(n2 + 1n);
console.log(n2 + 2n);
console.log(n2 + 3n);
console.log(n2 + 4n);
console.log(n2 + 5n);
console.log(n2 + 6n);
console.log(n2 + 7n);
console.log(n2 + 8n);

// uniform throughout