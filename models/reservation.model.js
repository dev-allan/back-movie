const mongoose = require('mongoose');
const MovieModel = require('./movie.model');
const Schema = mongoose.Schema;

// const MovieModel = require("./movie.model");

const reservationSchema = Schema({
    movie_id : [{ type : Schema.Types.ObjectId, ref : 'movies'}],
    salle_id : [{ type : Schema.Types.ObjectId, ref : 'salles'}],
    clients_id : [{ type : Schema.Types.ObjectId, ref : 'clients'}]
})

const RevervationSchema = mongoose.model("reservation", reservationSchema);

module.exports = RevervationSchema;