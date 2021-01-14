module.exports = app => {
   const controller = require('../controllers/jobController')();

   app.route('/api/v1/job')
      .get(controller.listJobs);

   app.route('/api/v1/job')
      .post(controller.createJob);

   app.route('/api/v1/job/:id')
      .put(controller.updateJob);

   app.route('/api/v1/job/:id')
      .delete(controller.deleteJob);

   app.route('/api/v1/job/:id')
      .get(controller.showJob);
}