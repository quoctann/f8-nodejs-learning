// Đây là file được đọc đầu tiên khi server nhận được request
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override')
const app = express();
// Cấu hình các đường đi (routes) bằng tập tin này
const route = require('./routes/index');
// Cấu hình liên kết với csdl mongodb
const db = require('./config/db');
// Biến khai báo port
const port = 3000;

const SortMiddleware = require('./app/middlewares/SortMiddleware');

// Custom middlewares
app.use(SortMiddleware);


// Tiến hành kết nối với db
db.connect();

// Dùng để lấy data từ form về (post)
app.use(express.urlencoded({ extended: true }))

// Thư viện dùng để xử lý method khác GET POST, override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// Khi có các request static file, vào thư mục này để GET
app.use(express.static(path.join(__dirname, '/public')));

// HTTP logger để đọc log, hỗ trợ cho việc debug
// app.use(morgan("combined"));

// Template engine dùng để render ra các template HTML
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';

                const icons = {
                    default: 'sort',
                    asc: 'sort-alpha-down-alt',
                    desc: 'sort-alpha-down',
                };

                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };

                const icon = icons[sortType];
                const type = types[sortType];

                return `<a href="?_sort&column=${field}&type=${type}"><i class='fas fa-${icon} me-2'></i></a>`;
            },
        },
    }),
);
app.set('view engine', 'hbs');
// Cấu hình lại đường dẫn đến thư mục views, __dirname là thư mục đang làm việc hiện tại, path join sẽ tự nối thêm dấu slash vào tùy thuộc hđh
app.set('views', path.join(__dirname, 'resources', 'views'));

// Cấu hình các routes - vừa require ở trên, route này sẽ đi vào /routes/index.js xử lý tiếp
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
