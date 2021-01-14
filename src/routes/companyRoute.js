module.exports = app => {
   const controller = require('../controllers/companyController')();

   app.route('/api/v1/company')
      .get(controller.listCompanys);

   app.route('/api/v1/company')
      .post(controller.createCompany);

   app.route('/api/v1/company/:id')
      .put(controller.updateCompany);

   app.route('/api/v1/company/:id')
      .delete(controller.deleteCompany);

   app.route('/api/v1/company/:id')
      .get(controller.showCompany);
}