// array, objects, functions

let a = [1,2,3,4,5]
let b = a
console.log(b);             
b.pop()
console.log(a);             // 1,2,3,4

let object1 = {
    name : "Aseem"
}

let object2 = object1

object2.name = "Pradhan"

console.log(object1);           // name changed to "pradhan"