const request =require("request");
// import request from "request";
const weather=(address,callback)=>{
const place =address;
const URL = `https://api.weatherstack.com/current?access_key=655e140045ae99bf58ea6eba93b49e45&query=${place}`;

request({ url: URL, json: true }, (error, response, body) => {
    if (error) {
        callback(error,"Error in network")
    } else if (response.statusCode !== 200) {
        callback(`${response.statusCode}`,undefined);
    } else if (body.error) {
        callback(body.error.info,undefined)
    } else {
        callback(undefined,{
            data1:`In ${body.location.name}, the temperature is ${body.current.temperature}°C`,
            data2:`Area: ${body.location.name}, Latitude: ${body.location.lat}, Longitude: ${body.location.lon}`
        }
            )
    }
});
}

module.exports=weather;
