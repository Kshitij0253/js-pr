function sayHellow (){
    console.log("h");
    console.log("e");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");    
}

// sayHelllow //this is function refrence

// sayHellow();


function addTwoNum (num1 , num2){
    let res = num1 + num2;
    return res;
}


function loginUserMessage(username){
 return `${username } just logged in`
}

console.log(addTwoNum(2,4));


console.log(loginUserMessage("kshitij"));


//rst and spred operator 
//... (rest operator)

function calculatCartPrice(val1,val2,...num1){
    return num1;
}


// console.log(calculatCartPrice(200,300,400));

const user ={
    username:"kshitij",
    price:199
}

function hadnlerObj(anyIbject){
    console.log(`Username is ${anyIbject.username} and price is ${anyIbject.price}`);

    
}


hadnlerObj({
    username:"sam",
    price:399
})


const myArr = [200,400,100,600]


function returnSeconfVal(myArray){
    return myArray[1];
}

console.log(returnSeconfVal(myArr));
