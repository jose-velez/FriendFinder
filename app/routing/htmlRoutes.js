var path = require("path");

// Exporting function

module.exports = function(app){
    console.log("working");
    app.get("/", function(req, res){
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/survey", function(req, res){
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};
