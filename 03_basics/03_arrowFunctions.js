const user = {
    userName: "Mazahir",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome`);  
        console.log(this);
          
    }
}

// user.welcomeMessage();
// user.userName = "Salman"
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     const userName = "Mazahir"
//     console.log(this.userName);
// }

// chai()

// const chai = function(){
//     const userName = "Mazahir"
//     console.log(this.userName);
// }
// chai()

// const chai = ()=> {
//     const userName = "Mazahir"
//     console.log(this);
// }
// chai()

// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwoNumbers = (num1, num2) => num1 + num2;
// const addTwoNumbers = (num1, num2) => (num1 + num2);
const addTwoNumbers = (num1, num2) => ({userName: "Mazahir"});


console.log(addTwoNumbers(2, 3));
