// Import de mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Définition des champs d'un film
const movieSchema = Schema({
  title: { type: String, required: true },
  duration: { type: String, required: true },
  type: { type: String, required: true },
});

// Création du modèle (objet qui contient les fonctions pour communiquer avec mongo)
const MovieModel = mongoose.model("movies", movieSchema);

// Export pour utiliser le model à l'extérieur
module.exports = MovieModel;
