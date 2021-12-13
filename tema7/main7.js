// let consomonautiInit = function() {
//     console.log('Salut init functie');

//     axios.get('https://api.spacexdata.com/v4/crew', {})
//     .then(function (response) {
//         console.log(response);
//     }); 
// };

function numberFunction() {
    let number = prompt("Please enter your number");
    if (number != null) {
      document.getElementById("demo").innerHTML =
      "You typed " + number + "! This is you lucky number!";
    }
  }