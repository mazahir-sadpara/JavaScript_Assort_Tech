const marvalHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

// marvalHeros.push(dcHeros)
// console.log(marvalHeros);

// console.log(marvalHeros[3][0]);

const newVar = marvalHeros.concat(dcHeros)
// console.log(newVar);

const spreadHeros = [...marvalHeros, ...dcHeros]
// console.log(spreadHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realArray = anotherArray.flat(Infinity)
// console.log(realArray);

// console.log(Array.from("ALi"));
console.log(Array.from({name: "ALi"}));

let score1 = 50
let score2 = 100
let score3 = 150

console.log(Array.of(score1, score2, score3));






