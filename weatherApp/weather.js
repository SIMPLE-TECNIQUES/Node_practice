const weather=require("./callbackAbc/weatherData")
// dynamic way to fetch data 
const add=process.argv[2];

if(!add){
    console.log("provide the Address");
}else{
    weather(add,(error,data )=>{
        if(error){
            console.log(error);
        }else if(data){
            console.log(data)
        }
        })

}

