const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = Schema({
  name: { type: String, required: true },
  username : { type: String, required: true },
  email : { type: String, required: true },
});

const ClientSchema = mongoose.model("clients", clientSchema);

module.exports = ClientSchema;
