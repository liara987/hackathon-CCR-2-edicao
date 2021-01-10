
module.exports = () => {
    const userDB = require('../data/userData.json');
    const controller = {};
  
    controller.listUsers = (req, res) => res.status(200).json(userDB);
  
    return controller;
  }