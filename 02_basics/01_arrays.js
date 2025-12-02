myArr1 = [1, 2, 3, 4, 5]
myArr2 = ["Mazahir", "Salman", "Israr", "Arif", "Dilshad"]
myArr3 = new Array(9, 10, 11, 12, 13)

// console.log(myArr1[0]);

//Array Methods

// myArr1.push(6)
// myArr1.pop()

// myArr1.unshift(9)
// myArr1.shift()

// console.log(myArr1);

// console.log(myArr1.includes(9));
// console.log(myArr1.indexOf(9));

const newArr = myArr1.join()
// console.log(myArr1);
// console.log(newArr);

//slice splice
console.log("A ", myArr1);

const myn1 = myArr1.slice(1, 3)

console.log(myn1);

console.log("B", myArr1);


const myn2 = myArr1.splice(1, 3)
console.log("C", myArr1);
console.log(myn2);

//splice actually manipulate actual array


