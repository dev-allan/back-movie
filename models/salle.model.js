const mongoose = require("mongoose");

const salleSchema = {
  name: { type: String, required: true },
  numberOfPlace: { type: Number, required: true },
};

const SalleSchema = mongoose.model("salle", salleSchema);

module.exports = SalleSchema;
