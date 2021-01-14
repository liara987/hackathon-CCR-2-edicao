module.exports = app => {
   const controller = require('../controllers/courseController')();

   app.route('/api/v1/course')
      .get(controller.listCourses);

   app.route('/api/v1/course')
      .post(controller.createCourse);

   app.route('/api/v1/course/:id')
      .put(controller.updateCourse);

   app.route('/api/v1/course/:id')
      .delete(controller.deleteCourse);

   app.route('/api/v1/course/:id')
      .get(controller.showCourse);
}