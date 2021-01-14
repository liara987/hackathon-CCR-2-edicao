
module.exports = () => {
  'use strict';
  const controller = {};
  const userDB = require('../data/userData.json');

  controller.listUsers = (req, res) => {
    res.status(201).send(`Rota User GET!`);
  };

  controller.createUser = (req, res) => {
    let data = JSON.stringify(req.body);    
    res.status(201).send(`Rota User POST com dados! --> ${data}`);
  };

  controller.updateUser = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Rota User PUT com ID! --> ${id}`);
  };

  controller.deleteUser = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota User DELETE com ID! --> ${id}`);
  };

  controller.showUser = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota User GET com ID! ${id}`);
  };

  return controller;
}