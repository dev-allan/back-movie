const express = require("express");

const MovieModel = require("../models/movie.model");

const Router = express.Router();

Router.route("/movies")
  .get(async (_, res) => {
    let movies = await MovieModel.find();
    if (movies.length === 0) {
      res.status(404);
    } else {
      res.status(200);
    }
    res.json(movies);
  })
  .post(async (req, res) => {
    let newMovie = req.body;
    try {
      let resp = await MovieModel.create(newMovie);
      res.status(201).json(resp);
    } catch (err) {
      console.error(err);
      res.status(400).json({
        message: err.message,
      });
    }
  });

Router.route("movies/:id")
  .get(async (req, res) => {
    try {
      let movie = await MovieModel.findById(req.params.id);
      res.status(200).json(movie);
    } catch (err) {
      console.error(err);
      res.status(400).json({
        message: err.message,
      });
    }
  })
  .delete(async (req, res) => {
    try {
      let resp = await MovieModel.findByIdAndDelete(req.params.id);
      res.json(resp);
    } catch (err) {
      console.error(err);
      res.status(400).json({
        message: err.message,
      });
    }
  });

module.exports = Router;
