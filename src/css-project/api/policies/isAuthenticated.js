module.exports = function(req, res, next) {
  console.log(`Policy check for route: ${req.path}`);
  if (req.session.authenticated) {
    return next();
  } else {
    return res.unauthorized();
  }
};
