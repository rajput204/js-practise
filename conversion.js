let score=33
console.log(typeof score);

// let valuInnumber=number(score)
// console.log(typeof number);

//"33"=33
//"33abc"=nan not a number
//true=1 false=0

let isLogeedin=1
let booleanLoggedin=Boolean(isLogeedin)
console.log(typeof isLogeedin);

let someNumber=35
let StringNumber=String(someNumber)
console.log(typeof StringNumber);

let Truenumber=45
let symbolnumber=Symbol(Truenumber)
console.log( typeof symbolnumber);

//*******************************OPERATIONS*************************************\\

let negative=45
let isNegative=-(negative)
console.log(typeof isNegative);
console.log(isNegative);
//basic operations//
console.log(2*2)
console.log(2+2);
console.log(2-2);
console.log(4%2);
console.log(4/2)

//********************conceptual operations *//

console.log("2"+2) //  output=22
console.log(2+"2")  // output=22
console.log("2"+2+2) //output:-222
console.log("2"+"2")  //output=22
console.log(2+2+"2") //output=42
 
//this comes under the type conversion if the first datatype is of string it will concatinate the rest if the first datatype is of number then  it will 
//it will do the first operation then it will prceed further//


//****************************************increment and decrement operator *****************************//
let gameCounter=100
gameCounter++
console.log(gameCounter); 

let gameCounter1=101
++gameCounter1 // it will add one value to the gamecounter and then return  the gamecounter value//
let gameCounter2=102
gameCounter2++  // it will first return the value of the gamecounter and then add one to it i.e it will first give 102 and then after gives 103//
console.log(gameCounter2);

//******************************************comparison operator *******************************//
console.log(2>1)//true
console.log(2<1)//false
console.log(2>=1)//true
console.log(2==1)//false
console.log(2!=1)//true

console.log(null==0)//false
console.log(null>0)//false
console.log(null>=0)//true

//comaprison operations converts null into number and then do the comaprison i.e null converted to 0 then it was compared to the 0>=0 as true//

console.log(undefined>0)//false
console.log(undefined<0)//false
console.log(undefined==0)//false



