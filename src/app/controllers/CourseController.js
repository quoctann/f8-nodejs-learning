// Import model vào
const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')
class SiteControllers {
    
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course =>
                res.render('courses/course', { course: mongooseToObject(course) })
            )
            .catch(next)
    }
}

module.exports = new SiteControllers();
