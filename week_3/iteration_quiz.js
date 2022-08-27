// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (const iterator of dairy) {
        console.log(iterator)
    }
}
// Task 2 - Only the child
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (const iterator of Object.keys(bird)) {
        console.log(iterator, ": ", bird[iterator])
        
    }
}

// Task 3 - Show them all

function animalCan() {
    for (const key in bird) {
        console.log(key,": ", bird[key])
    }
}
animalCan()