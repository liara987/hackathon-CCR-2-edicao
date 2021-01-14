module.exports = app => {
   const controller = require('../controllers/userController')();

   app.route('/api/v1/user')
      .get(controller.listUsers);

   app.route('/api/v1/user')
      .post(controller.createUser);

   app.route('/api/v1/user/:id')
      .put(controller.updateUser);

   app.route('/api/v1/user/:id')
      .delete(controller.deleteUser);

   app.route('/api/v1/user/:id')
      .get(controller.showUser);
}