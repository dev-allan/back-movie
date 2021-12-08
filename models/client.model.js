const mongoose = require("mongoose");

const clientSchema = {
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  adress: String,
};

const ClientSchema = mongoose.model("client", clientSchema);

module.exports = ClientSchema;
