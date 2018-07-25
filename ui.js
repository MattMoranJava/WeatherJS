class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.wind = document.getElementById('w-wind');

    }

    paint(weather){
        console.log(weather);
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = Math.round((weather.main.temp - 273) * 100 + Number.EPSILON) / 100;
        //this.details.textContent = weather.weather[0].description;
        this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
        this.wind.textContent = `Wind Heading: ${weather.wind.deg} degrees, speed: ${weather.wind.speed} kph`;
    }

    clear(loc){
        this.location.textContent = 'Location not found';
        this.desc.textContent = `OpenWeatherMap doesn't recognise ${loc}`;
        this.string.textContent = 'Try again.';
        this.icon.setAttribute('src', '');
        this.humidity.textContent = '';
        this.wind.textContent = '';
    }
}