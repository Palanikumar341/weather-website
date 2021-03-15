const request = require('request')

//geocode


const geoCode = (address, callback) => {

    const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoicGFsYW5pa3VtYXIzNDEiLCJhIjoiY2ttOWYzdDY5MWd2eTJvcG1qZjBjcXR1NiJ9.T5uq9TkUCI5QA09lLQF_8A'
 request({uri : geoCodeUrl, json:true }, (error,response)=>{
     if(error){
         callback('Unable to Connect to Weather Service!',undefined)
     }else if(response.body.features.length === 0 ){
         callback('Unable to find Location!',undefined)
     }else{
      callback(undefined,{
          latitude: response.body.features[0].center[1],
          longitude: response.body.features[0].center[0],
          location : response.body.features[0].place_name
      })
     }
 })

}



module.exports =  geoCode;


// const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphiia.json?access_token=pk.eyJ1IjoicGFsYW5pa3VtYXIzNDEiLCJhIjoiY2ttOWYzdDY5MWd2eTJvcG1qZjBjcXR1NiJ9.T5uq9TkUCI5QA09lLQF_8A'

// request({
//     uri: geoCodeUrl,
//     json:true
// },(error,res)=>{
//     if(error){
//         console.log('Unable to Connect to Weather Service!')
//     }else if(res.body.features.length === 0){
//         console.log("Unable to find Location!")
//     }
//     else{
//     const longitude = res.body.features[0].center[0]
//     const latitude = res.body.features[0].center[1]
//     console.log(longitude, latitude)
//     }
// })





// const countries = (address, callback)=>{
//     const Url = 'https://restcountries.eu/rest/v2/name/'+ address

//     request({
//         uri:Url,
//         json:true
//     },(error,res)=>{
//         if(error){
//             callback('Unable to connect to weather service!')
//         }
//         else{
//             callback(res.body[0].name)
//         }
//     })
// }

// module.exports = countries;


// const Url = 'https://restcountries.eu/rest/v2/name/Italy'

// request({
//     uri:Url,
//     json:true
// },(error,res)=>{
//     if(error){
//         console.log('Unable to connect to weather service!')
//     }
//     else{
//         console.log(res.body[0].name)
//     }
// })