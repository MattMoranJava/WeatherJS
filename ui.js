class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-hunidity');
        this.feelslike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');

    }

    paint(weather){
        console.log(weather);
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].main;
        this.details.textContent = weather.weather[0].description;
    }
}