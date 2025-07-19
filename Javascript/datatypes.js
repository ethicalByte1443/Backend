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

