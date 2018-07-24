//Init weather object
const weather = new Weather('London', 'UK');
const ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather);
function getWeather() {
    weather.getWeather()
    .then(results => ui.paint(results))
    .catch(err => console.log(err));
}