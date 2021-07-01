// All exercises are numbered with the content following with the solution
//1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

console.log('document window loaded');
setTimeout(() => {
    console.log('Hi Iam called 2.5 seconds after the script is loaded');
}, 2500);

//2. Create a function that takes 2 parameters: delay and stringToLog. 
//Calling this function should log out the stringToLog after
// delay seconds. Call the function you have created with some 
//different arguments.

function delayAndLog(delay, stringToLog){
    setTimeout(() => {
        console.log(stringToLog);
        
    }, delay *1000);
}
delayAndLog(5, 'This string is logged after 5 seconds');
delayAndLog(3, 'This string is logged after 3 seconds');

//3. Create a button in html. When clicking this button, use
//the function you created in the previous task to log out the 
//text: Called after 5 seconds 5 seconds after the button is clicked.

const btn = document.querySelector('#click-btn');
btn.addEventListener('click', () => {
    delayAndLog(5,'Iam logged in 5 seconds after clicking the button');
});

//4. Create two functions and assign them to two different variables. 
//One function logs out Earth, the other function logs out Saturn. 
//Now create a new third function that has one parameter: planetLogFunction. 
//The only thing the third function should do is call the provided 
//parameter function. Try call the third function once with the 
//Earth function and once with the Saturn function.

const earthLogger = () => {
    console.log('Earth');
}
const saturnLogger = () => {
    console.log('Saturn');
}
function planetLogFunction(callbackLogger){
    return callbackLogger();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//5. Create a button with the text called "Log location". 
//When this button is clicked the location (latitude, longitude) 
//of the user should be logged out using this browser api
//6 show the location on map using google maps api

const logLocationBtn = document.querySelector('#log-location');
const status = document.querySelector('#status');
let map;

function displayUserCurrentLocation(){
    function success(position){

        status.textContent = 'The coordinates of the users current location are:';
        const latitude = document.querySelector('#lat');
        latitude.innerHTML = `Latitude is: ${position.coords.latitude}`;
        const longitude = document.querySelector('#lng');
        longitude.innerHTML = `Longitude is: ${position.coords.longitude}`;
        //initMap(); // i have called this function directly from script src in html file
    }
    function error(){
        status.textContent = 'Unable to find your location';
    }
    navigator.geolocation.getCurrentPosition(success, error);
}
logLocationBtn.addEventListener('click', displayUserCurrentLocation);

function initMap(){
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 55.6761,lng: -12.5683},
        zoom: 8,
      });
}

//7. Create a function called runAfterDelay. It has two parameters: 
//delay and callback. When called the function should wait delay 
//seconds and then call the provided callback function. 
//Try and call this function with different delays and different callback functions

function runAfterDelay(delay,callback){
    setTimeout(() => {
        return callback();
    }, delay * 1000);

}
runAfterDelay(4,function(){
    console.log('should be logged after 4 seconds');
});

//8. Check if we have double clicked on the page. A double click 
//is defined by two clicks within 0.5 seconds. If a double click 
//has been detected, log out the text: "double click!"

let clickCount = 0;
document.addEventListener('click', function(){
    clickCount++;
    if(clickCount===1){
        setTimeout(() => {
            clickCount = 0;
        }, 500);
    } else if(clickCount===2){
        console.log('Double clicked');
        clickCount = 0;
    }
})

//9. Create a function called jokeCreator that has three parameters: 
//shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. 
//If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function 
//that should log out a funny joke. And vice versa.

function jokeCreator(shouldTellFunnyJoke,logFunnyJoke,logBadJoke){
    (shouldTellFunnyJoke === true) ? logFunnyJoke() : logBadJoke();
}
function funnyJokeFunc(){
    console.log('Its a funny joke 🤣');
}
function badJokeFunc(){
    console.log('Its a bad joke 😜');
}
jokeCreator(false, funnyJokeFunc, badJokeFunc);
jokeCreator(true,funnyJokeFunc,badJokeFunc);
