const User = require('../model/User');
const CONFIG = require('../../config');
const URI = (path) => (CONFIG.API_BASE_PATH + path);

function Route(app) {

  // Example
  app.get(URI('login'), (req, res) => {
    res.cookie('AuthToken', 'bad18eba1ff45jk7858b8ae88a77fa30', CONFIG.COOKIE_OPTIONS);
    res.cookie('uid', 12, CONFIG.COOKIE_OPTIONS);
    res.send(require('../data/auth/login'));
  });
  app.post(URI('logout'), (req, res) => {
    res.clearCookie('AuthToken');
    res.clearCookie('uid');
    res.send(require('../data/auth/logout'));
  });

  app.get(URI('users'), (req, res) => {
    res.send(User.getUsers(req.query));
  });
  app.put(URI('user'), (req, res) => {
    res.send(User.newUser(req.body));
  });
  app.get(URI('user/:id'), (req, res) => {
    res.send(User.getUser(req.params.id));
  });
  app.post(URI('user/:id'), (req, res) => {
    res.send(User.updateUser(req.params.id, req.body));
  });
  app.delete(URI('user/:id'), (req, res) => {
    res.send(User.deleteUser(req.params.id));
  });
}

module.exports = Route;
