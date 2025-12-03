//Singleton
//Object.create

// Object Literals

const mySymbol = Symbol("key1")

const jsUser = {
    name: "Mazahir",
    "full name": "Mazahir Hussain",
    age: 25,
    location: "Lahore",
    email: "mazahir@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday", "Saturday"],
    [mySymbol]: "key2"
}

// console.log(jsUser.location);
// console.log(jsUser["location"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);

jsUser.email = "salman@google.com"
// console.log(jsUser["email"]);
// Object.freeze(jsUser)
jsUser.email = "dilshad@google.com"
// console.log(jsUser);

jsUser.greeting = function (){
    console.log("Hello JS User!");   
}
// console.log(jsUser.greeting());

jsUser.greetingTwo = function (){
    console.log(`Hello JS User ${this.name}`);   
}
console.log(jsUser.greetingTwo());
