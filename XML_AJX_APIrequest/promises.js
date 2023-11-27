const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptohraphy, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

//---------------------------------------------------Promise 2nd ----->.  node XML_AJX_APIrequest/promises.js
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
    },1000)

}).then(function(){
    console.log("Async 2 resolved");
})

//-------------------------------------------------------------------Promise 3rd

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
  console.log(user);
})
//--------------------------------------------------------------------------Promise 4th

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"hitesh",password:"123"})
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})

const username = promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((usernme)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise is either resolved or rejected"));

//---------------------------------------------------------------------------------------------------Promise 5th

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('ERROR:JS went wrong')
        }
    },1000)
});

//----------------------------------------------------->> async can not handle the errors
// async function consumePrimseFive(){ 
//     const response = await promiseFive
//     console.log(response);
// }

// consumePrimseFive()


//-------------------------------------------------------> Second way to understand

async function consumePrimseFive(){ 
        try{
            const response = await promiseFive
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }
    
consumePrimseFive()

//----------------------------------------------> using try catch 

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
//getAllUsers()

//--------------------------------------------> call this function using ".then  and .fetch" 


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))

