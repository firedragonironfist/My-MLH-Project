const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FlightSchema = new Schema({
    from: String,
    to: String,
    fdate: Date,
    tdate: Date,
    price: Number
});

module.exports = mongoose.model('Flight', FlightSchema)
