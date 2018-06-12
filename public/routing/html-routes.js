// Dependencies
// =============================================================
const path = require('path');
const htmlController = require('../controllers/htmlController');

//GET Requests...this code will handle when a user visits the home page, the thought tank page, and the archive page


module.exports = function(app) {

    app.get("/", htmlController.showMainPage);

    app.get("/projects", htmlController.showProjectsPage);

    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));

    });

};

