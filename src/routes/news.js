// Các file route đều có các thành phần line 2,3 giống nhau và giống cấu trúc với line 4
const express = require('express');
const router = express.Router();
const newController = require('../app/controllers/NewsController');

// Khi đã vào đến đây mặc nhiên là đang xử lý một request có url/news/cái gì đó
// Nếu có tồn tại 'cái gì đó' ~ :slug - là một url param thì nó sẽ chạy phương thức show của controller (require ở trên rồi), nếu không nó sẽ hiểu là chỉ có url/news thôi nó sẽ chạy phương thức index của controller
router.get('/:slug', newController.show);
router.get('/', newController.index);

module.exports = router;
