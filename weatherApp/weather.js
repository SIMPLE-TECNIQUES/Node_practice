const weather=require("./callbackAbc/weatherData")

weather("New Delhi",(error,data )=>{
if(error){
    console.log(error);
}else if(data){
    console.log(data)
}
})