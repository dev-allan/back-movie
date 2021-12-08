const mongoose = require('mongoose');

const reservationSchema = {
    titleMovie = { type : String, required : true},
    salle = { type : String, required : true},
    client = { type : String, required : true},
}

const RevervationSchema = mongoose.model("reservation", reservationSchema);

module.exports = RevervationSchema;