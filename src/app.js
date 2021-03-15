const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geoCode = require('./utils/countries')
const forecast = require('./utils/wether')

const app = express();

app.listen(3000,()=>{
    console.log('server start on 3000')
})

const publicDirPath = path.join(__dirname, '../public')
const viewsdirPath = path.join(__dirname, '../templates/views')
const partialsdirPath = path.join(__dirname, '../templates/partials')
// console.log(__dirname)
// console.log(__filename)

//console.log(path.join(__dirname, '../public'))

app.set('view engine','hbs')
app.set('views', viewsdirPath )
app.use(express.static(publicDirPath))
hbs.registerPartials(partialsdirPath)
//------------dynamic-------------------

app.get('',(req,res)=>{
   res.render('index',{
       title: 'Weather App',
       name:'Palani Kumar'
   })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'Palani Kumar'
    })
 })

 app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help',
        SomeText : 'This Is From Some Text',
        name:'Palani Kumar'
    })
 })

 app.get("/weather",(req,res)=>{
     if(!req.query.address){
         return res.send({
             error: 'You Must Provide a Address'
         })
     }

     geoCode(req.query.address, (error,{latitude, longitude , location}={})=>{
         if(error){
             return res.send({ error})
         }
         forecast(latitude, longitude ,(error,foreCastData)=>{
             if(error){
                 return res.send({error})
             }
             res.send({
                 foreCast : foreCastData,
                 location,
                 address:req.query.address
             })
         })
     })





    //  res.send({
    //      forecast:'It IS Snowling',
    //      location:'boston',
    //      address: req.query.address
    //  })
 })

 app.get("/products",(req,res)=>{
     if(!req.query.search){
         return res.send ({
             error : 'You Must Provide A Search Term'
         })
     }
     res.send({
         products: []
     })
 })
   //-- wildCard
 app.get('*',(req,res)=>{
     res.render('404',{
         title:'404',
         errorMessage : 'Page Not Found',
         name:'Palani Kumar'
     })
 })
 
//  app.get('/help/*',(req,res)=>{
//     res.render('404',{
//         title:'404',
//         errorMessage : 'Help Page Not Found',
//         name:'Palani Kumar'
//     })
// })


// ---------------static--------------------

// app.get('',(req,res)=>{
//     res.send('<h1>Weather</h1>')
// })

// app.get('/help',(req,res)=>{
//     res.send([{
//         name: 'palani'
//     },{
//         name:'kumar'
//     }])
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>About</h1>')
// })


app.get('/weather',(req,res)=>{
    res.send({
        forecast : 'it Is Snowing',
        location : 'india'
    })
})