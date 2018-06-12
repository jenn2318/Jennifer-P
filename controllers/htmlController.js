let path = require("path");

//GET Requests...this code will handle when a user visits the home, projects or contacts page

module.exports = function(app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/projects", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/projects.html"));

    });


    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "/..public/contact.html"));

    });

};