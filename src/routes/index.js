// File này sẽ được đọc sau src/index.js vì để định tuyến, từ file này sẽ sử dụng các file khác trong thư mục routes
const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
    // Hệ thống sẽ match đường dẫn URL request từ trên xuống, match cái nào nó sẽ vào cái đó, vd trang chủ với URL '/' sẽ không match được với news mà match xuống '/'
    // Tùy vào cấu hình mà nó sẽ chuyển đến file routes tương ứng để xử lý tiếp
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

module.exports = route;
