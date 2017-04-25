
var friends = require('../data/friends.js');
// Exporting function
module.exports = function(app){
    console.log("api working");

    app.get("/api/friends", function(req, res){
      console.log(res.json(friends));
      return res.json(friends);
    });

    app.post("/api/friends", function(req, res){
      friends.push(req.body);
      res.json(true);
    });
};
console.log(friends);
