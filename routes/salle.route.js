const express = require("express");

const SalleModel = require("../models/salle.model");

const Router = express.Router();

Router.route("/salles")
  .get(async (_, res) => {
    let salles = await SalleModel.find();
    if (salles.length === 0) {
      res.status(404);
    } else {
      res.status(200);
    }
    res.json(salles);
  })
  .post(async (req, res) => {
    let newSalle = req.body;
    try {
      let resp = await SalleModel.create(newSalle);
      res.status(201).json(resp);
    } catch (err) {
      console.error(err);
      res.status(400).json({
        message: err.message,
      });
    }
  });

Router.route("salles/:id").get(async (req, res) => {
  try {
    let salle = await SalleModel.findById(req.params.id);
    res.status(200).json(salle);
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: err.message,
    });
  }
})
.delete(async (req, res) => {
    try{
        let resp = await SalleModel.findByIdAndDelete(req.params.id);
        res.json(resp);
    }catch(err){
        console.error(err);
        res.status(400).json({
            message : err.message
        })
    }
})

module.exports = Router;