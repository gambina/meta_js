//Arrays are iterable but not generic objects

var clothingItem = {
  price: 50,
  color: 'beige',
  material: 'cotton',
  season: 'autumn'
}

//for of loop only iterates the obj itself not it's parent

for (key of Object.keys(clothingItem)) {
  console.log(key, " :" ,clothingItem[key])
}

function testBracketsDynamicAccess() {
  var dynamicKey = Math.random() > 0.5 ? "speed" : "color";

    var drone = {
      speed: 15,
      color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();