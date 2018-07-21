// Dependencies
// =============================================================
const path = require('path');
const htmlController = require('../controllers/htmlController');

//GET Requests...this code will handle when a user visits the home page, the thought tank page, and the archive page


module.exports = function(app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/projects", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/projects.html"));

    });
    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));

    });

};

