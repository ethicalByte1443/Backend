// 1. var / let / const

// declaration and initialisation

let a = 12;

// window me add krta h
// function scoped hota h
// aap firse declare kr saktte ho and errror nahi aayega  -> redeclaration

// let a = 20; ---> error causing

console.log(a);
// 1.2 let

// let window me add nhi krta


// 1.3 const 

const dulha = "Lab"

console.log(dulha);


// global / block / functional scoped

var x = "aseem";

{
    console.log(x);
    var y = "pradhan";
    console.log(y);
    x = "ASEEM";        // it will update the value globally
}
console.log(x);
console.log(y); // var block ko respect nhi krta wo sirf function ko respect krta hai


