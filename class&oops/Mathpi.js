 const descritor =  Object.getOwnPropertyDescriptor(Math,"PI")

 console.log(descritor);
 

// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);


const chai = {
    name:"test",
    price:230,
    isAvailable:true,

    breakCode(){
        console.log("code fatt gya ");
        
    }
}

console.log(chai);


console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
    console.log(`${key}: ${value}`);
    }
}

// Object.defineProperty(chai,"name",{
//     writable:false,
//     enumerable:false,
// })


// console.log(Object.getOwnPropertyDescriptor(chai,"name"));