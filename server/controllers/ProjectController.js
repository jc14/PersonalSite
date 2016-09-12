var Project = require("../models/Project");

module.exports = function(app, route) {
  app.get(route, function(req, res) {
    res.send("It's alive PROJECT!");
  });

  app.get("/projects", function(req, res) {
    Project.find(function(err, result) {
      if(err) {
        console.error(err);
        res.status(500).send({ error: "Server failure!!!" })
      }
      res.send(result);
    })
  });

  app.get(route + "/:projectTitle", function(req, res) {
    res.send("Project: " + req.params.projectTitle);
  })


  return function(req, res, next){
    next();
  };
}
