import { IObj } from "../1. Typescript esercizio 1/start";

class User {
    id: number;
    name: string;
    surname: string;
    age: number;
    // etc...

    constructor(user: IObj){
        this.name = user.name;
        this.surname = user.surname;
        this.age = user.age;
        this.id = user.id;
        // etc...
    }

    getFullName(){
        return this.name + ' ' + this.surname;
    }
}
