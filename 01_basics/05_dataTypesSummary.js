// There are two types of Data Types. One Premitive and Second Non Premitive or Reference Type
// classified on the basis of how data of that type stored in and accesss from memory
// call by value => Premitive
// call by reference => Non Premitive

//Premitive : 7 => String, Number, Boolean, BigInt, null, Undefined, Symbol

// Non Premitive or Reference Types => Array, Object, Function

// JavaScript is dynamically typed because the type of a variable is determined at runtime, not when you write the code.


let score = 100 // A number
let scoreValue = 100.3 //A number there is no float etc in JS

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id);
// console.log(anotherId);
// console.log(anotherId===id);

let bigNumber = BigInt(9007199254740991);
let big = 123456789012345678901234567890n;


console.log(bigNumber + 2n); // 9007199254740992 (❌ wrong!)


const heros = ["Abdul Sattar Edhi", "Allama Iqbal", "Quied E Azam"];

let myObj = {
    name: "Mazahir",
    age: 22,
}

const myFunction = function (){
    console.log("Hello");
}
myFunction()

//**************************Memory*************************************/

//Stack Memory => used in case of Primitive Data Types => copy of value milti hai
//Heap Memory  => used in case of Non Primitive Data Types => value ka reference milta hai

//Stack Memory Example
let nam = "Mazahir"
let anotherNam = nam;
// console.log(anotherNam)
// anotherNam = "Salman"
// console.log(anotherNam)
// console.log(nam)

//Heap Memory Example

let userOne = {
    email: "mazahir@gmail.com",
    age: 22
}

let userTwo = userOne

userTwo.email = "Hello@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

