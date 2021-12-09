const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = Schema({
    titleMovie : [{ type : Schema.Types.ObjectId, ref : 'Movie'}],
    salle : [{ type : Schema.Types.ObjectId, ref : 'Salle'}],
    clients : [{ type : Schema.Types.ObjectId, ref : 'Client'}]
})

const RevervationSchema = mongoose.model("reservation", reservationSchema);

module.exports = RevervationSchema;