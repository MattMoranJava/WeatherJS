class Weather {
    constructor(city, state){
        this.apiKey = '3358341099f047ec3cba833b47826e28';
        this.city = city;
        this.state = state;
    }

    // Fetch Weather from API. Using OpenWeatherMap instead of Brad's Weather Underground,
    // as Weather Underground no longer give out free API keys for personal use.

    async getWeather(){
        
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);
        const responseData = await response.json();

        return responseData;
    }

    changeLocation(city, state){
        this.city = city;
        this.state = state;
        
    }
}