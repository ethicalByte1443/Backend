// ek type automatically convert ho jayega      

console.log("5" + 1);      // string         // + is concatenation -> number to string
// always another operand is converted to string if other operand apperas to be string


console.log("5" - 1);     // number


// **************************************
//  0 false "" null undefined NaN document.all  => false

if(null){
    console.log("true");
}
else{
    console.log("false");
}


// true + false
console.log("type system");
console.log(true + false);      // 1
console.log("" + true);         // true
console.log("" + false);         // false
console.log(NaN + undefined);       // NaN
console.log(undefined + NaN);       // NaN
console.log(NaN + 1);               // NaN
console.log(null + 1);              // 1


// NaN is the failed number operation in javascript thats why it is a number at the end of the day

// undefined vs null
let x;
console.log(x);         // undefined --> dafault
x = null;
console.log(x);         // manually assigned value