import {Animal} from "./animal-class";
import {Dog} from "./dog-class";
import {Lion} from "./lion-class";
import {Bear} from "./bear-class";
import {Zoo} from "./zoo-class";

const zoo = new Zoo();
const layka = new Dog("Layka", 5, "Dog", "Afafaf")
const simba = new Lion("Simba", 3, "Lion", "Rrrrrrr")
const kosolapy = new Bear("Kosolapy", 3, "Bear", "Aaaaaaaa");

console.log("Information about Layka")
console.log(layka.getIfto())
layka.makesound()
layka.pet()

console.log("________________________")
console.log("Information about Simba")

console.log(simba.getIfto())
simba.makesound()
simba.wild()
simba.canHunt()

zoo.addAnimal(layka)
zoo.addAnimal(simba)
zoo.addAnimal(kosolapy)
zoo.showAnimal()
zoo.showSound()


console.log("Before deleting")
console.log("________________________")
zoo.removeAnimal(kosolapy)
zoo.showAnimal()
zoo.showSound()


