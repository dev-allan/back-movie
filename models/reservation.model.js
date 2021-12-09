const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ClientModel = require("./client.model");

const reservationSchema = Schema({
    titleMovie : { type : String, required : true},
    salle : { type : String, required : true},
    clients : [{ type : Schema.Types.ObjectId, ref : 'Client'}]
})

const Client = ClientModel.find();
const RevervationSchema = mongoose.model("reservation", reservationSchema);

module.exports = RevervationSchema;