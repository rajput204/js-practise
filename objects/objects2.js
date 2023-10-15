const tinderuser={}

tinderuser.id="123abc"
tinderuser.name="aditya"
tinderuser.isLoggedin=false

// console.log(tinderuser)

const regularuser={
    email:"aditya256@gmail.com",
    fullname:{
        userfullname:{

            firstname:"aditya",
            lastname:"kumar"
        }
        }
}

// console.log(regularuser.fullname.userfullname.firstname)

// console.log(regularuser.fullname)

// console.log(regularuser.fullname.userfullname)

// console.log(regularuser.fullname.userfullname.firstname)

// console.log(regularuser.fullname.userfullname.firstname.lastname)



//ASSIGN OPERATOR


const object1={1:"a",2:"b"}
const object2={3:"a",4:"b"}
const object3={5:"a",6:"b"}

const object4={object1,object2}
// const object5=Object.assign({},object1,object2,object3)
console.log(object3)


const object5={...object1,...object2} //for combining all the object
console.log(object5)



console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isLoggedin'))