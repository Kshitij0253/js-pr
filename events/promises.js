//promise number 1
//chaiing in promises

const promiseOne = new Promise(function(resolve,reject){
//Do an async task
//DB calls,cryptography,network
setTimeout(function(){
    console.log("Async task is complrtr");
    resolve()
},1000)
});

promiseOne.then(function(){
    console.log('promise consumed');
    
})


new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
    
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({usernmae:"kshitij",email:"ex@gmail.com"})
    },1000)
}).then(function(user){
    console.log(user);
    
})


const promiseFor = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"test",pass:"123"})
        }else{
            reject('ERROR SOmething went wrong')
        }
    })
})

promiseFor
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("finslly promise is either resolve or showing error");
    
})



const promiseFive = new Promise(function(res,rej){
    setTimeout(function(){
        let error = true
        if(!error){
            res({username:"prmise5",password:'prmse5'})

        }else{
            rej('Error : JS went wrong')
        }
    },1000)
});


async function consumePromiseFive() {
  try {
    const response = await promiseFive
    console.log(response);
 
  } catch (error) {

    console.log(error);
    
  }
}
consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()
//fetch api is important for interview prospective

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
