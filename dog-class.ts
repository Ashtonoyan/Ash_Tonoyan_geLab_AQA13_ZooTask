import {Animal} from "./animal-class";
import {IsPet} from "./interface-isPet";

export class Dog extends Animal implements IsPet{
    constructor(name: string, age: number, species: string, sound: string) {
        super(name, age, species, sound);
    }

    makesound():void{
        console.log(`${this.name} "makes" ${this.sound}`);
    }

    getIfto():string{
        return `Name is ${this.name}, age is ${this.age}, "species" ${this.species} `;
    }

    pet():void {
        console.log(`${this.name} is pet animal `);
    }
}