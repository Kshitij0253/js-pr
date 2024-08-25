// in window envr = window = {this = window}
// in node env = this = {}

function SetUserName(userName){
    
    this.userName = userName;
    console.log("called");
    
}

//hold the refrence of fun to another function 
//.call(this,name)

function createUser (username,email,password){
    SetUserName.call(this,username);
    
    this.email=email;
    this.password=password;
}

const chai = new createUser("chai","chai@gmail.con","!23");
console.log(chai);
