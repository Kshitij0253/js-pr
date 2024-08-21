
const user = {
    username:'kshitj',
    price:999,
//basicaly this reffers to current context


    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage
// user.username = "rishab"
// user.welcomeMessage();
// in browser we have a globel obj that is Window object
//otside obj is node envirnment 
//inside function also a node environment 
// console.log(this)

// function chai(){
//     let username = "kshitij"
//     console.log(this);
//     // console.log(this.username)
// }

// chai();



// const chai = function (){
//     let username = "kshitij"
//     console.log(this.username)
// }

// chai()


const chai = ()=>{
        let username = "kshitij"
        console.log(this)
    console.log(this.username)
}



chai();


//pure arrow function explicitly return 
// const addTwo = (num1,num2)=>{
//     return num1+ num2;
// }


//arrow function with implicit return 
const addTwo = (num1,num2)=> num1+ num2;

// const addTo = (num1,num2) => (num1+ num2)




console.log(addTwo(3,4))

