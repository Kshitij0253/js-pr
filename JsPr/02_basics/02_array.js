const marvels = ["thor","IronMan","spiderMan"]
const Dc = ["superman","flash","batman"]

// marvels.push(Dc)

// console.log(marvels);

// console.log(marvels[3][1]);


// const newArr = marvels.concat(Dc);

// console.log(newArr);

//... spread operator
const all_new_heros = [...marvels,...Dc];

console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],7[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);



