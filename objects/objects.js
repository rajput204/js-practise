//objects literal
const mysym=Symbol("key1") //taking symbol as an key and 
const jsuser={
    name:"aditya",[mysym]:"mykey1",//defining symbol as key
    "full name":"aditya kumar singh", //that is the need of the using the another calling method in js i.e jsuser["fullname"] to access the fullname
    age:18,
 location:'bihar',
 email:"vinay465@gmail.com",
 isLoggedIn:false,
 lastLogindays:["maonday","saturday"]

}
console.log(jsuser.email)
console.log(jsuser["email"])//another method of calling the email
console.log(jsuser["full name"])
console.log(jsuser[mysym])

//if u want that no one can chage your values for that you have to use the method freeze
Object.freeze(jsuser)//now no one can change the value of the js user.

jsuser.name="nitin"
console.log(jsuser.name)//output is the previous one that is aditya not nitin because we have locked the js user from changing the values.

