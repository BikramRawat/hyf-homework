
const inputElement = document.getElementById('input-city');
const btnElement = document.getElementById('weatherButton');
const key = '6284b3975ab711a2f7c25e4a1d0434a9';
let apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=YOUR_APP_ID';

btnElement.addEventListener('click', ()=> {

    if(inputElement.value){
        const cityName = inputElement.value.toLowerCase();
        apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${key}`;

        fetch(apiURL)
        .then(res => res.json())
        .then(data => displayWeather(data));
    }
    else {
        alert('Enter the city name ?');  
    }
});
function displayWeather(data){
    
    const iconElement = document.querySelector(".weather-icon");
    iconElement.innerHTML = `<img src="icons/${data.weather[0].icon}.png"/>`;

    const tempElement = document.querySelector(".temperature-value p");
    tempElement.innerHTML = `${Math.floor(data.main.temp - 273)}°<span>C</span>`;

    const descElement = document.querySelector(".temperature-description p");
    descElement.innerHTML = `Description: ${data.weather[0].description}`;

    const locationElement = document.querySelector(".location p");
    locationElement.innerHTML = `Location: ${data.name}, ${data.sys.country}`;

    const windElement = document.querySelector(".wind-speed p");
    windElement.innerHTML = `Wind Speed : ${data.wind.speed}`;

    const cloudyElement = document.querySelector(".cloudy p");
    cloudyElement.innerHTML = `How cloudy is : ${data.clouds.all}`;

    const sunRiseSetElement = document.querySelector(".sun-rise-set p");
    sunRiseSetElement.innerHTML = `Sun rise ${data.sys.sunrise}, Sun set ${data.sys.sunset}`;    
}
function getWeatherByGeoLocation(lat,lon){
        apiURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
        
        fetch(apiURL)
            .then(res => res.json())
            .then((data) => displayWeather(data));
    }

const notifyElement = document.querySelector('.notification p');
function geoLocation(){
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeatherByGeoLocation(lat,lon);
            const currentLocationElement = document.querySelector('.current-location p');
            currentLocationElement.innerHTML = `Latitude ${lat} and Longitude ${lon}`;
        });
    }  else{

    notifyElement.innerHTML = alert('User denied access');
    }
}
const geoButton = document.getElementById('currentLocation');

geoButton.addEventListener('click', geoLocation());
