const express = require('express')
const app = express()
const path = require('path')
const ejsMate = require('ejs-mate')
const staticPath = path.join(__dirname,'../public')
const mongoose = require('mongoose')
const Flight = require('./models/Flight')

mongoose.connect('mongodb://127.0.0.1:27017/airline',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'))
db.once('open',()=>{
    console.log('Database Connected')
})

app.engine('ejs', ejsMate)

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'views'))

app.use(express.static(staticPath))

app.get('/login',(req,res)=>{
    res.render('Airline/login')
})
app.get('/adminlogin',(req,res)=>{
    res.render('Airline/adminlogin')
})
app.get('/admin',(req,res)=>{
    res.render('Airline/admin')
})
app.get('/book',(req,res)=>{
    res.render('Airline/book')
})
app.get('/manage',(req,res)=>{
    res.render('Airline/manage')
})
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/flights', async(req,res)=>{
    const flights = await Flight.find({})
    res.render('Airline/manage')
})

app.get('/makeFlight',async(req,res)=>{
    const flight = new Flight({from: 'Banglore', to: 'Mumbai', fdate: '07-03-2023', tdate: '08-03-2023', price: 699})
    await flight.save()
    res.send(flight)
})
app.listen(3000, ()=>{
    console.log('Serving at port 3000')
})