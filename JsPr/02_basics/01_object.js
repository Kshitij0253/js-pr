//singleton
//object literals

//study symbol in js before interview

const mySym = Symbol("key1")

const JsUser ={
    name:"Kshitij",
    "full name":"Kshitij sharma",
    [mySym]:"mykey1",
    age :22,
    location:"Delhi",
    email:"ks@gmail.com",
    isLoggedIn:false,
    lastLogindays:["Moday","Saturday"]
}

console.log(JsUser.email);

console.log(JsUser["full name"]);
console.log(JsUser.mySym);

console.log(typeof JsUser.mySym);
console.log(JsUser[mySym]);


JsUser.email = "ks@microsofit.com"
// Object.freeze(JsUser)

JsUser.email = "ks@tesla.in"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
    
}


JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());







