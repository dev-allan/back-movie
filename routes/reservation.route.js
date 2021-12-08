const express = require("express");

const ReservationModel = require("../models/reservation.model");

const Router = express.Router();

Router.route("/reservations")
  .get(async (_, res) => {
    let reservations = await ReservationModel.find();
    if (reservations.length === 0) {
      res.status(404);
    } else {
      res.status(200);
    }
    res.json(reservations);
  })
  .post(async (req, res) => {
    let newReservation = req.body;
    try {
      let resp = await ReservationModel.create(newReservation);
      res.status(201).json(resp);
    } catch (err) {
      console.error(err);
      res.status(400).json({
        message: err.message,
      });
    }
  });

Router.route("reservations/:id").get(async (req, res) => {
  try {
    let reservation = await ReservationModel.findById(req.params.id);
    res.status(200).json(reservation);
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: err.message,
    });
  }
})
.delete(async (req, res) => {
    try{
        let resp = await ReservationModel.findByIdAndDelete(req.params.id);
        res.json(resp);
    }catch(err){
        console.error(err);
        res.status(400).json({
            message : err.message
        })
    }
})

module.exports = Router;