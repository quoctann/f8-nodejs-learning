// File này là một module chung để xử lý các route không cần tương tác với csdl hoặc không có nhiều trang nội dung (chẳng hạn home, about us, contact,...) gộp nhóm chung để đỡ phải viết nhiều file controller, nhiều file model,...
const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
