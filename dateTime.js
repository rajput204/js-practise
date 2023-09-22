// const mydate= new Date()
// console.log(mydate)

const mydate=new Date()
console.log(mydate.toDateString());//it will give the output in friday sep with current date

console.log(mydate.toLocaleDateString());//it will give the output in the slashes

console.log(mydate.getHours());

console.log(mydate.toTimeString())//it will give time according to the gmt

console.log(mydate.getTime()) //basically used when you need to compare two different time at a time
 console.log(Date.now());//here you will get the two fifferent time at a time