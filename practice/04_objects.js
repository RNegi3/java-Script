
const tinderUser = {}

tinderUser.id = "RaOne"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "Klyne@gmail.com",
    fullname: {
        userFullname:{
            firstname: "Ritesh",
            lastName: "Negi"
        }
    }
}

// console.log(regularUser.fullname.userFullname); we use "." method to get values.

// how can i merge two obj:

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3);