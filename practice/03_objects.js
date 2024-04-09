// singleton
// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Ritesh",
    age: 20,
    location: "London",
    email: "RaOne@emial.go.home",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"], 
    [mySym]: "myKey1"
}
//two ways you can access the objects
//one: JsUser.name      , two: JsUser["name"] - You have to pass it as a string

// console.log(typeof JsUser[mySym]);
// console.log(JsUser);

// Create a function

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');
}
JsUser.g
JsUser.greetingTwo()