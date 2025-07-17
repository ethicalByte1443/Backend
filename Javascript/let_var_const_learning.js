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


// same kaam krege let k use krke

let naam = "aseem";

{
    console.log(naam);
    naam = "ASEEM";             // update krega globally

    let surname = "pradhan";

}

console.log(naam);
// console.log(surname);               // error dega 

// another example of let

function abcd(){
    let x = 10;
    if(x >= 20){
        console.log(x + " is greater than 20");
    }
    else{
        console.log(x + " is less than 20");
        x = Math.floor(Math.random() * 100) + 20;
        let y = 10;
    }
    console.log(y); // --> give "pradhan" because it finds y for same scoped that is found in the var y = "pradhan" line 32

    console.log("New Value for " + x);
}


abcd();