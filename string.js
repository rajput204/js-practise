const name="aditya"
const repocount=50
console.log(name+repocount+"value");
console.log('hello my name is ${name} and my repocount is ${repocount}');


const gameName=new String('aditya')
console.log(gameName)
console.log(gameName[0])

//for length of the string
console.log(gameName.length)
// to convert to uppercase
console.log(gameName.toUpperCase())
//to lowercase
console.log(gameName.toLowerCase())

//to find the characterat
console.log(gameName.charAt(2))

//to find the index of the any string
 console.log(gameName.indexOf('i'))

 //trim it will trim the first and last spaces of the string
 const myName="   adityakumar    "
 console.log(myName)
 console.log(myName.trim())

 //includes to search for the required data
 const myname1="adityakumar"
 console.log(myname1.includes('k'))

 //replace to replace the require data
 const myname2="adityakumar"
 console.log(myname2.replace('a','A'))

 //split it will give the list of the string
const devil="ADITYA"
console.log(devil.split('- '))