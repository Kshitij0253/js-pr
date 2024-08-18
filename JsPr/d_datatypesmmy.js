//Primitive 

//7 types: String,Number,Boolean,null,undefined,Symbol,BigInt(Scientific value or large int value)

const score = 100
const scoreValue = 100.3
const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId);


const bigNumber = 343245435345435342n




//Reference (Non - Primitives)
//non primitive type is function in js 
//Array,Object,Functions

const heros = ["homelander","atran","starlight"]

let myObj ={
    name:"kshitij",
    age:22
}

const myFun = function(){console.log("hello fun");
}