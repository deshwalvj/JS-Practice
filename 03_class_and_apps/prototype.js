// let myName = "vijay"

// console.log(myName.length);

let myHeros = ["Thor","spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says Hello`);
}

// myHeros.hitesh();
// myHeros.heyHitesh();

//inheritance

const User = {
    name:"chai",
    email:"chai@google.com"
}

const Teacher = {
    makevideo:true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User;

//moder syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength();

"hietsh".trueLength()
"iceTea".trueLength()