// Lớp các phương thức định nghĩa hành vi respond về cho client, phương thức nào được gọi tùy thuộc vào routes cần cái gì
class NewsControllers {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('News Detail');
    }
}

module.exports = new NewsControllers();
