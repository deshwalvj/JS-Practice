//--------------------------------->> Object Literal
const usr = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUsrDetails: function(){
        // console.log("got usr details from database");
        console.log(`username: ${this.username}`)
        // console.log(this);
    }
}

console.log(usr.username);
console.log(usr.getUsrDetails());

//---------------------------------------------- Construct function 
// ye isliye kam ata hai taki bar bar data manually feed na krna pde 

function Usr(username, loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this   //--> isko kro chahe mt kro ye default hota hai "JS" me

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
}

const userOne = new Usr("hitesh",12,true);
const userTwo = new Usr("vijay",23,false); //---------> this will overide the data. isliye hmm "new" ka use krte hai 

console.log(userOne);
console.log(userTwo);
