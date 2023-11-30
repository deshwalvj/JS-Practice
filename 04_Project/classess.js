// E6
/*
class user {
    constructor(username,email,paswd){
        this.username = username;
        this.email = email;
        this.paswd = paswd
    }

    encriptPassword(){
        return `${this.paswd}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai","chai@gmail.com","123");


console.log(chai.encriptPassword());
console.log(chai.changeUserName());
*/

//behind the seen

function User(username,email,paswd){
    this.username = username;
    this.email = email;
    this.paswd = paswd
}

    User.prototype.encriptPassword = function(){
        return `${this.paswd}abc`
    }

    User.prototype.changeUserName = function(){
        return `${this.username.toUpperCase()}`
    }

const tea = new User("tea","tea@gmail.com","123");

console.log(tea.encriptPassword());
console.log(tea.changeUserName());


