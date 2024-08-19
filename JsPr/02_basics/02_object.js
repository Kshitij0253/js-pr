//Singletone

 const tinderUser = new Object() //singletone object 

// const tinderUser = {} //non singletone obj 

tinderUser.id ="123abc"
tinderUser.name="Kshitij"
tinderUser.isLoggedIn=false

// console.log(tinderUser);


const regularUser = {
    email:"ks@gmail.com",
    fullname:{
        userFullname:{
            firstName:"Rishab",
            lastName:"Sharma"
        }
    }
}

// console.log(regularUser.fullname.userFullname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 =  Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2};

// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLgedIn'));



// **************Destructring************
//destructring is important for interview prospective

const course ={
    coursename:'js in hindi',
    price:"999",
    courseInstructor:"codewithChai"
}

const {courseInstructor:instructor} = course

console.log(instructor);





