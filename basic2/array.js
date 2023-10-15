//array

const myarray=[1,2,3,4,5,6]  //datatype can  be mixed it contains the heterogenous data in the array.

// console.log(myarray[0])


//array method

// myarray.push(6) //to push an element in an array
// myarray.push(7)
// console.log(myarray);
// myarray.pop() //to remove the last element of the array
// console.log(myarray)


// myarray.unshift(9) //to add an element in the beginning
// console.log(myarray)

// myarray.shift() //arrange in the ascending order
// console.log(myarray)

// console.log(myarray.includes(9))//to aske where the eleemnt id matching inside element from the given element. output will be boolean

// console.log(myarray.indexOf(3))


//slice ,splice

console.log("A",myarray);


const myn2=myarray.slice(1,3)
console.log(myn2)

const myn3=myarray.splice(1,3) //original array get manupulated from the real one.
console.log("c",myarray)
console.log(myn3)


