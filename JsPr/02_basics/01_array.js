//js array is resizable
//mixed datatypes in array 


const myArr = [0,1,2,3,4,5]

const myHeros = ["homelander","atran","starLight"]


const myArr2 = new Array(1,2,3,4)


console.log(myArr[2
]);


//Arrrays methods
// myArr.push(6);
// myArr.push(4);
// myArr.pop();

console.log(myArr.includes(9));


const newAr = myArr.join();


console.log(myArr);

console.log(newAr);


// slice, splice importanct for interview prospective
// The slice() method in JavaScript extracts a section of an array and returns a new array containing the selected elements, without modifying the original array.
// let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
// let new_cars = cars.slice(1, 4);
// console.log("cars :", cars);
// console.log("new_cars :", new_cars);


// The splice() method in JavaScript is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place, modifying the original array.

let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
cars.splice(2, 0, 'ambassedor', 'BMW', 'Audi');
console.log("cars :", cars);
