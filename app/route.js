module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('./helloworld.ejs');
        // res.send('hello world');
    });
};
