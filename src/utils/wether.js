const request = require('request')
     


const forecast = (latitude, longitude , callback) => {
    
    const uri ='http://api.weatherstack.com/current?access_key=19ab61737f08cf5ac7e3f18238656f08&query='+ longitude+ ','+ latitude +'&units=f'

    request({uri:uri, json:true},(error,response)=>{
        if(error){
         callback('Unable to Connect to Weather Service!',undefined)
        }else if(response.body.error){
          callback('Unable to find Location!', undefined)
        }else {
          callback(undefined, `${response.body.current.weather_descriptions[0]}. It Is Currently ${response.body.current.temperature} degrees out. It Feels like ${response.body.current.feelslike} degrees out!`)
        // callback(response.body.current)
        }
    })
}





module.exports = forecast;


// const uri = 'http://api.weatherstack.com/current?access_key=19ab61737f08cf5ac7e3f18238656f08&query=&units=f'

// request({uri: uri, json:true},(error,responce)=>{
//     if(error){
//         console.log('Unable to Connect to Weather Service!')
//     }else if(responce.body.error){
//         console.log("Unable to find Location!")
//     } else{
//         console.log(`${responce.body.current.weather_descriptions[0]}. It Is Currently ${responce.body.current.temperature} degrees out. It Feels like ${responce.body.current.feelslike} degrees out!`)
//     }
   
//     //console.log(responce.body)
//    // console.log(responce.body.current)
// })



// request({
//     uri:Url,
//     json:true
// },(error, response)=>{
//     if (error) {
//        console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//      console.log('Unable to find location')
//      } else {
//         const latitude = response.body.coord.lat
//         const longitude = response.body.coord.lon
//         console.log(latitude, longitude)
//       //console.log((response.body))         
//      } 
// })
