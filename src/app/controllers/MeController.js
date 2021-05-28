// Import model vào
const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class meControllers {
    
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next)
    };
}

module.exports = new meControllers();
