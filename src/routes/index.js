module.exports = (app, basePath) => {
  const URI = (path) => (basePath + path);

  // Example
  app.get(URI('users'), (req, res) => res.send(require('../data/user/getUsers')));
  app.put(URI('user'), (req, res) => res.send(require('../data/user/newUser')));
  app.get(URI('user/:id'), (req, res) => res.send(require('../data/user/getUser')));
  app.post(URI('user/:id'), (req, res) => res.send(require('../data/user/updateUser')));
  app.delete(URI('user/:id'), (req, res) => res.send(require('../data/user/deleteUser')));
};
