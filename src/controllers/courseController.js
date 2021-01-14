
module.exports = () => {
  'use strict';
  const controller = {};
  const courseDB = require('../data/courseData.json');

  controller.listCourses = (req, res) => {
    res.status(201).send(`Rota Course GET!`);
  };

  controller.createCourse = (req, res) => {
    let data = JSON.stringify(req.body);    
    res.status(201).send(`Rota Course POST com dados! --> ${data}`);
  };

  controller.updateCourse = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Rota Course PUT com ID! --> ${id}`);
  };

  controller.deleteCourse = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota Course DELETE com ID! --> ${id}`);
  };

  controller.showCourse = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota Course GET com ID! ${id}`);
  };

  return controller;
}