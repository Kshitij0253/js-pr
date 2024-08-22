function one(){
    const username='kshitij'

    function two(){
        const website = 'youtube'
        console.log(username);
        
    }
    // console.log(website);

    two();
    
}

one();

if(true){
    const username = "kshitij"
    if(username === 'kshitij'){
        const website = "youtube"

        console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);


///***********intersting */

console.log(addOne(3));

function addOne(num){
    return num + 1;
}

addOne(4);

console.log(addTwo(3));

const addTwo = function (num){
    return num + 2;
}

addTwo(3);