const marvel_heros=["thor","ironman","spiderman"]
const dc=["superman","batman","flash"]

// marvel_heros.push(dc) //it gives arrays inside an array
// console.log(marvel_heros)
// console.log(marvel_heros[3][2])

// const all=marvel_heros.concat(dc) //concat is used to merge to different array
// console.log(all)

const all_new=[...marvel_heros,...dc] //spread method to conacatinate to different array
console.log(all_new)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity) //flat is used to seperate the array inside an array here infinity is an hack to seperate the self sort the thing.
console.log(real_another_array)


//asking questions in an array

console.log(Array.isArray("aditya"))

//converting to an array
console.log(Array.from("aditya"))//to convert the given string to the array.

let score=100
let score2=200
let score3=300

console.log(Array.of(score,score2,score3)) //of is used to convert the given datatype to given array




