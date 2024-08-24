//impoertant querry seelector that we used 

// 1. document.querySelector
//2.document.querySelectorAll
// 3.NodeList in dom in nodelistuse foreach loop 
//4.ArrayList in dom 
//5.getElelemenyByClassName

//keep practice of above querry selector
//dom is important for interview prospective

//how to create a new element in DOM
const parent = document.querySelector('.parent')
console.log(parent);
console.log(parent.children);
console.log(parent.children[1].innerHTML);

for(let i = 0;i<parent.children.length;i++){
    console.log(parent.children[i].innerHTML);
    
}


parent.children[1].style.color="orange"
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);


const dayOne = document.queySelector('.day')
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

console.log("NOdeS: ",parent.chilNodes);



//create element 
const div = document.createElement("div");
console.log(div);
div.className = "main"
div.id= Math.random() * 10 +1;

div.setAttribute("title","generated title");
div.style.backgroundColor = "green"
div.style.padding="12px"
// div.innerText = "CHai aur code"
const addText =   document.createTextNode("generated code");
div.appendChild(addText);

document.body.appendChild(div)


//edit and remove elements 
function addLanguage(lanName){
    const li = document.createElement("li");
    li.innerText = lanName;
    document.querySelector(".languages").appendChild(li);

}

addLanguage("python")
addLanguage("java")

//addoptimizeway

function addLanguageOptimized(lanName){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(lanName))
    document.querySelector(".languages").appendChild(li);

}

addLanguageOptimized("golang")

//edit values
const secofnLan =  document.querySelector("li:nth-child(2)")
console.log(secofnLan);

// secofnLan.innerHTML = "MOjo"
// optimize use below
const newLi = document.createElement('li')
newLi.textContent = "MOjo"
secofnLan.replaceWith(newLi)


//edit
const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML='<li>TypeScript</li>'

//remove

const lastLanf = document.querySelector("li:last-child")
lastLanf.remove()