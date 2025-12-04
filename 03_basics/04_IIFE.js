// Immediately Invoked Function Expressions (IIFE) used to prevent from global scope pollution
(function cahi() {
    //named IIFE
    console.log("DB Connected!");    
})();
// cahi()
((name)=> {
    console.log(`DB Connected Two! ${name}`);    
})("Mazahir")
