console.log("Weather-App Start...");

// create objec of request for sending request
const request=require("request");

request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=songadh',
    json: true
},(error,response,body)=>{
    // console.log("error: ",)
    console.log("Address",JSON.stringify(body,undefined,1).results[0].formatted_address);
});