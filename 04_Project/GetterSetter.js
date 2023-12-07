class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    // get password(){
    //     return this._password.toUpperCase()
    // }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}vijay`
    }

    // set password(value){
    //     this._password = value.toUpperCase()
    // }

    set password(value){
        this._password = value;
    }

}

const vijay = new User("vijay@deshwal.ai","abc")
console.log(vijay.password);
console.log(vijay.email);