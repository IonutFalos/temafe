function numberFunction() {
    let number = prompt("Please enter your number");
    if (number != null) {
      document.getElementById("demo").innerHTML =
      "You typed " + number + "! This is you lucky number!";
    }
  }

let cars = [
  ["Saab", 1],
  ["Volvo", 2],
  ["BMW", 3]
];

console.log (cars[0][1]);

document.getElementById("demo").innerHTML = cars;

document.getElementById("demo").innerHTML =
Math.floor(Math.random() * 10);