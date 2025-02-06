import {Animal} from "./animal-class";
import {IsWild} from "./interface-isWild";
import {CanHunt} from "./interface-canHunt";

export class Bear extends Animal implements IsWild, CanHunt {
    constructor(name: string, age: number, species: string, sound: string) {
        super(name, age, species, sound);
    }

    makesound():void{
        console.log(`${this.name} "makes" ${this.sound}`);
    }

    getIfto():string{
        return `Name is ${this.name}, age is ${this.age}, "species" ${this.species} `;
    }

    wild():void{
        console.log(`${this.name} is wild animal`);
    }

    canHunt():void{
        console.log(`${this.name} is a hunter`);
    }
}