//object literals 
//this is current context 

const user = {
    username:"Kshitij",
    loginCount : 8,
    signnedIn:true,


    getUserDetails:function(){
        console.log(`user: ${this.username}`);
        
        console.log("Got user details from db");
        console.log(this);
        
    }
}

// console.log(user.username);

// console.log(user.getUserDetails());

// console.log(this);


//constructor function 

// new its a constructor function 

function User (username,loginCOunt,isLoggedIn){
this.username = username;
this.loginCOunt = loginCOunt;
this.isLoggedIn = isLoggedIn;

return this
}

const userOne = new User("Kshitij",12,true)
const userTwo = new User("test",14,false)

console.log(userOne);

//difference between implicity and explicitly


