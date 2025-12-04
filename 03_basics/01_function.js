function myName () {
    console.log("M");
    console.log("a");
    console.log("z");
    console.log("a");
    console.log("h");
    console.log("i");
    console.log("r");
}

// myName()

// function addTwoNumbers (number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers (number1, number2){
    let result = number1 + number2;
    // console.log("Hello");
    return result    
}

const result = addTwoNumbers(10, 9)
// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
    if(!username){
        console.log("Enter username");
        return
    }
    return `${username} is just logged in!`
}

// console.log(loginUserMessage("Mazahir"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage("Maz"));

function calculateCartPrice (val1, val2, ...num) {
    return num
}

// console.log(calculateCartPrice(200, 300, 400, 500));

// const user = {
//     name: "mazahir",
//     prices: 9999
// }

function handleObject (anyobject) {
    // console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
    
}

handleObject({
    name: "mazahir",
    price: 9999
})

const myNewArray = [100, 200, 300]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue([10, 20, 30]));

