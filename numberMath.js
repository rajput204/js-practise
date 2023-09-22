// const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString());
// console.log(typeof balance.toString());
// console.log(balance.toString().length);


// const othernumber=23.4566
// console.log(othernumber.toPrecision(3));//to precision will define upto where you want the digit

// const hundred=1000000
// console.log(hundred.toLocaleString());//it will give the format to write the digit in the unique format 1,00,000

console.log(Math.abs(-4));

console.log(Math.round(4.6));//round off the value

console.log(Math.floor(9.5));//it will always take the upper value

console.log(Math.ceil(4.9));


console.log(Math.min(4,5,6,8));//it will give the min value in the range of the given number

console.log(Math.max(5,7,9,10));//it will give the maximum value to the given number


//**********************************RANDOM FUNCTION *********************************/
console.log(Math.random()*10+1)

console.log(Math.floor(Math.random()*10+1))
//***************************************** */*********************** */
const min=10
const max=100
console.log(Math.floor(Math.random()*(max-min+1)));