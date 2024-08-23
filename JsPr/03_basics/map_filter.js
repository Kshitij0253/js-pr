// const coding = ["js","ruby","java"];

// const values = coding.forEach((item)=>{
//     return item;
// })
//for each dont return the value 
// console.log(values);


// for interview prospective read Filter , map
//filter return the value 


const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter((num)=> num>4);
// const newNums = myNums.filter((num)=>{
//     return num >4
// })

// console.log(newNums);



//for each
// const newNums = [];

// myNums.forEach((num)=>{
//     if(num >4){
//         newNums.push(num);
//     }
// })

// console.log(newNums);

//for intrrview do some exercise in fitler , map,forEach  
 

const muNuers = [1,2,3,4,5,6,7,8,9,10];
//map automatically return value 

// const newmmnNumers = muNuers.map((num)=>{return num+10})


// chaining
// const newNums = muNuers.map().map()
const newNums = muNuers
.map((num)=>num * 10)
.map((num)=> num + 1)
.filter((num)=> num >= 40)


console.log(newNums);
