const mongoose = require('mongoose')
const Flight = require('../models/Flight')

mongoose.connect('mongodb://127.0.0.1:27017/airline',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'))
db.once('open',()=>{
    console.log('Database Connected')
})

const seedDB = async()=>{
    await Flight.deleteMany({})
    const c = new Flight({from:'mumbai'})
    await c.save 
}

seedDB()