const request =require("request");

// const request = require("request");

const URL = "https://api.weatherstack.com/current?access_key=655e140045ae99bf58ea6eba93b49e45&query=New%20Delhi";

request({ url: URL, json: true }, (error, response, body) => {
    if (error) {
        console.log(error);
    } else if (response.statusCode !== 200) {
        console.log(`Error: Received status code ${response.statusCode}`);
    } else if (body.error) {
        console.log('Error:', body.error.info);
    } else {
        setTimeout(() => {
            console.log(`In ${body.location.name}, the temperature is ${body.current.temperature}°C`);
            console.log(`Area: ${body.location.name}, Latitude: ${body.location.lat}, Longitude: ${body.location.lon}`);
        }, 3000);
    }
});
