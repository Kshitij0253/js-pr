// function chai(){
//     console.log("DB Connected");
    
// }


// chai();

//Imediately Invoked Functon 
//why we usse iifi for interview
(function chai(){
    console.log('DB conected');
    //named iifi
})();

(function code(){
    console.log('DB conected again');
    
})();

(()=>{
    //unnamed iifi
    console.log("do code");
    
})();

((name)=>{

    //parameter iifi 
    console.log(`DB Connected ${name}`);
    
})('Kshitij')

