class Weather {
    constructor(w){
        this.location = w.location
        this.description = w.description
        this.temperature = w.temperature
        this.wind_speed = w.wind_speed
    }  
    get location(){
        return this._location
    }  
    set location(new_location){
        if (typeof(new_location) == 'string' && new_location !=''){ 
            this._location = new_location
        }
        else {
            this._location = 'Belfast'
        }
    }
    get description(){
        return this._description
    }  
    set description(new_description){
        if (typeof(new_description) == 'string'){ 
            this._description = new_description
        }
        else {
            this._description = 'Cloudy'
        }
    }
    get temperature(){
        return this._temperature
    }  
    set temperature(new_temperature){
        if (typeof(new_temperature) == 'number'){ 
            this._temperature = new_temperature
        }
        else {
            this._temperature = 12
        }
    } 
    get wind_speed(){
        return this._wind_speed
    }  
    set wind_speed(new_wind_speed){
        if (typeof(new_wind_speed) == 'number' && new_wind_speed >= 0){ 
            this._wind_speed = new_wind_speed
        }
        else {
            this._wind_speed = 7
        }
    }    
    showWeather(){
        const report = `The weather in ${this.location} is ${this.description} at ${this.temperature} wind speed is ${this.wind_speed}`
        return report
    }
}

// exercise the code
w_Belfast = {'location':'Belfast', 'description':'Rainy', 'temperature':11, 'wind_speed':24}