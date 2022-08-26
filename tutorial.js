// function listArrayItems(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     console.log(i, arr[i])
//   }
// }
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
// listArrayItems(colors);


var dog = {
  color: "brown",
  height: 30,
  length: 60
};
dog["type"] = "corgi";

console.log(typeof (dog))

var str = "Hello";
console.log(str.match("jello"));

try {
  Number(5).toPrecision(300)
} catch (e) {
  console.log("There was an error")
}
