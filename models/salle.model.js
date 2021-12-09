const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const salleSchema = Schema({
  name: { type: String, required: true },
  numberOfPlace: { type: Number, required: true },
});

const SalleSchema = mongoose.model("salles", salleSchema);

module.exports = SalleSchema;
