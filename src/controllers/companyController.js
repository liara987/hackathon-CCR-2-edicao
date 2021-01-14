
module.exports = () => {
  'use strict';
  const controller = {};
  const companyDB = require('../data/companyData.json');

  controller.listCompanys = (req, res) => {
    res.status(201).send(`Rota Company GET!`);
  };

  controller.createCompany = (req, res) => {
    let data = JSON.stringify(req.body);    
    res.status(201).send(`Rota Company POST com dados! --> ${data}`);
  };

  controller.updateCompany = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Rota Company PUT com ID! --> ${id}`);
  };

  controller.deleteCompany = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota Company DELETE com ID! --> ${id}`);
  };

  controller.showCompany = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota Company GET com ID! ${id}`);
  };

  return controller;
}