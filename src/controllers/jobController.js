
module.exports = () => {
  'use strict';
  const controller = {};
  const jobDB = require('../data/jobData.json');

  controller.listJobs = (req, res) => {
    res.status(201).send(`Rota Job GET!`);
  };

  controller.createJob = (req, res) => {
    let data = JSON.stringify(req.body);    
    res.status(201).send(`Rota Job POST com dados! --> ${data}`);
  };

  controller.updateJob = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Rota Job PUT com ID! --> ${id}`);
  };

  controller.deleteJob = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota Job DELETE com ID! --> ${id}`);
  };

  controller.showJob = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota Job GET com ID! ${id}`);
  };

  return controller;
}