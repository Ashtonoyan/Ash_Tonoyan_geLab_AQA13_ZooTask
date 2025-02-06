import {Animal} from "./animal-class";
import {Dog} from "./dog-class";
import {Lion} from "./lion-class";
import {Bear} from "./bear-class";

export class Zoo{
    private animal: Animal[] = [];

    addAnimal(animal: Animal): void {
        this.animal.push(animal);
        console.log(`${animal.name} added in Zoo`);
    }

    removeAnimal(animalToDelete: Animal): void {
        this.animal = this.animal.filter(animal => animal !== animalToDelete);
        console.log(`${animalToDelete.species} ${animalToDelete.name} removed in Zoo`);
    }

    showAnimal():void{
        console.log('In Zoo lives:');
        this.animal.forEach(animal => {
            console.log(`'Name is' ${animal.name},'age is' ${animal.age}, ${animal.species}`);
        })
    }

    showSound():void{
        console.log('All sound in our Zoo:');
        this.animal.forEach(animal => {
            console.log(`${animal.sound}`)
        })
    }
}