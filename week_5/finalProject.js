// Given variables
const dishData = [
  {
      name: "Italian pasta",
      price: 9.55
  },
  {
      name: "Rice with veggies",
      price: 8.65
  },
  {
      name: "Chicken with potatoes",
      price: 15.55
  },
  {
      name: "Vegetarian Pizza",
      price: 6.45
  },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
  for (const key in dishData) {
    if (Object.hasOwnProperty.call(dishData, key)) {
      const element = dishData[key];
    }
    let finalPrice
    if (taxBoolean===true) {
      finalPrice = dishData[key].price * tax
    }
    else if (taxBoolean===false) {
      finalPrice = dishData[key].price
    }
    else {
      console.log("You need to pass a boolean to the getPrices call!")
      return
    }
    console.log(`Dish: ${dishData[key].name} Price: $${finalPrice}`)
  }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean)
  if (typeof guests==="number" && guests <30 && guests > 0) {
    var discount = 0
    if (guests < 5) {
      discount = 5
    }
    else  if (guests >=5) {
      discount = 10
    } 
    console.log(`Discount is: $${discount}`)
  }
  else {
    console.log('The second argument must be a number between 0 and 30')
  }
  
}

// Call getDiscount()
getDiscount(true,2)
getDiscount(false,10)
