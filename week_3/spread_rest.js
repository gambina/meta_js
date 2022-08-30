
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

// Add without push method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

const car1 = {
  speed: 200,
  color: 'yellow'
}
const car 2 = {...car1}

car1.speed = 201
console.log(car1.speed, car2.speed)