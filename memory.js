// two best example to understand the stck and heap in the jaavscript
//let us take an example of the string as stack
 let userName='aditya'
 let anotherName='anuj'
 console.log(userName)
 console.log(anotherName)
 //here stack will give the copy of its memory location to aanother name so it username does not get change

 //heap memory location given it original memory location for rewriting the code//
 let userone={
    name:'aditya',
    email:-"kumaraditya30651@gmail.com"
 }
 let usertwo=userone
 usertwo.name="anuj"
 console.log(userone)
 console.log(usertwo)
