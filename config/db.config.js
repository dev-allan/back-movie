// import de mongoose pour la communication avec la bdd
const mongoose = require("mongoose");

// config pour la connection au serveur mongodb
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_PORT = process.env.MONGO_PORT
const MONGO_DB = process.env.MONGO_DB

const uri = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

// création d'une connection à MongoDB
mongoose.connect(uri, {}, () => {
  console.log(`connecté à MongoDB avec l'uri ${uri}`);
});