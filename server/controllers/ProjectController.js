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

  app.post(route, function(req, res) {

    console.log("Request body:", req.body)

    var project = new Project({
      title: req.body.title,
      description: req.body.description,
      thumbnail: req.body.thumbnail,
      colorKey: req.body.colorKey,
      links: req.body.links
    })

    project.save(function(err) {
      if(err) {
        console.error(err);
        res.status(500).end();
      }
      res.status(201).end();
    })
  })


  return function(req, res, next){
    next();
  };
}
