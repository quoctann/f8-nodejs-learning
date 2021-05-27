// Import model vào
const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')
class SiteControllers {
    // [GET] /
    index(req, res, next) {
    // Cách viết bằng callback
    //     Course.find({}, function(err, courses) {
    //        if(!err) {
    //            res.json(courses);
    //            return;
    //        } 
    //        res.status(400);
    //     });
    // }
    // Cách viết bằng promises, next là một middleware sẽ tập trung xử lý lỗi ở một nơi
    // Handlebars v4.6 trở lên fix lỗi bảo mật nên không thể truy cập object do contrustor tạo ra, phải parse nó về literal object bằng phương thức toObject được built in sẵn trong handlebars
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }


    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteControllers();
