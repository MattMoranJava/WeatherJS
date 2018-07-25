//Init storage
const storage = new Storage();

//Init weather object
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Location change event
document.getElementById('w-change-btn' ).addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    weather.changeLocation(city, state);
    storage.setLocationData(city, state);
    getWeather();

    //close modal
    $('#locModal').modal('hide');
});

//Make return in State form field fire a button click on w-change-btn
const stateField = document.getElementById('state');
stateField.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.keyCode === 13){
        document.getElementById('w-change-btn').click();
    }
});

function getWeather() {
    weather.getWeather()
    .then(results => ui.paint(results))
    .catch(err => {
        ui.clear(document.getElementById('city').value);
        console.log(err);
    });
}