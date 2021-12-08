const express = require("express");

const ClientModel = require("../models/client.model");

const Router = express.Router();

Router.route("/clients")
  .get(async (_, res) => {
    let clients = await ClientModel.find();
    if (clients.length === 0) {
      res.status(404);
    } else {
      res.status(200);
    }
    res.json(clients);
  })
  .post(async (req, res) => {
    let newClient = req.body;
    try {
      let resp = await ClientModel.create(newClient);
      res.status(201).json(resp);
    } catch (err) {
      console.error(err);
      res.status(400).json({
        message: err.message,
      });
    }
  });

Router.route("clients/:id").get(async (req, res) => {
  try {
    let client = await ClientModel.findById(req.params.id);
    res.status(200).json(client);
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: err.message,
    });
  }
})
.delete(async (req, res) => {
    try{
        let resp = await ClientModel.findByIdAndDelete(req.params.id);
        res.json(resp);
    }catch(err){
        console.error(err);
        res.status(400).json({
            message : err.message
        })
    }
})

module.exports = Router;
