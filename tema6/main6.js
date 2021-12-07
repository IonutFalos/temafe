let consomonautiInit = function() {
    console.log('Salut init functie');

    axios.get('https://api.spacexdata.com/v4/crew', {})
    .then(function (response) {
        console.log(response);
    }); 
};