const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  adress: String,
});

const ClientSchema = mongoose.model("clients", clientSchema);

module.exports = ClientSchema;
