const storage = new Storage();
const weatherLocation = storage.getLocationData();

const ui = new UI();

const weather = new Weather(weatherLocation.city, weatherLocation.state);


document.addEventListener('DOMContentLoaded', fetchWeatherData);

changeInputLocation = document.getElementById('w-change-btn');
changeInputLocation.addEventListener('click', e => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);

    storage.setLocationData(city, state);

    fetchWeatherData();

    $('#locModal').modal('hide');
});


function fetchWeatherData() {
    weather.getWeather()
    .then(data => {
        ui.paint(data);
    })
    .catch(err => console.log(err));
}

