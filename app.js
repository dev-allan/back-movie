const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

require('./config/db.config');

const clientRoute = require("./routes/clients.route");
const reservationRoute = require("./routes/reservation.route");
const movieRoute = require("./routes/movies.route");
const salleRoute = require("./routes/salle.route");

const app = express();

const PORT = process.env.NODE_PORT || 3000;

app.use(express.json());

app.use(clientRoute);
app.use(reservationRoute);
app.use(movieRoute);
app.use(salleRoute);

app.listen(3000, () => {
    console.log(`express lancé sur le port ${PORT}`)
})