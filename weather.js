// API now has heavier requirements to fetch data
// and can no longer be used to for this application 

class Weather {
    constructor(city, state) {
        this.apiKey= 'not_an_api_key';
        this.city = city;
        this.state = state; 
    }

    //Fetch weather data from API
    async getWeather() {
        const response = await fetch(`
            http://api.wunderground.com/api/${this.apiKey}/conditions/q/
            ${this.state}/${this.city}.json`);
        
        const responseData = await response.json();

        return responseData.current_observation;
    }

    //Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }

}

