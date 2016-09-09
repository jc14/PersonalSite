module.exports = function(app, route) {
  app.get(route, function(req, res) {
    res.send("It's alive PROJECT!");
  });

  return function(req, res, next){
    next();
  };
}
