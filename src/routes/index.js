module.exports = (app, config) => {
  const URI = (path) => (config.API_BASE_PATH + path);

  // Example
  app.post(URI('login'), (req, res) => {
    res.cookie('AuthToken', 'bad18eba1ff45jk7858b8ae88a77fa30', config.COOKIE_OPTIONS);
    res.cookie('uid', 12, config.COOKIE_OPTIONS);
    res.send(require('../data/auth/login'));
  });
  app.post(URI('logout'), (req, res) => {
    res.clearCookie('AuthToken');
    res.clearCookie('uid');
    res.send(require('../data/auth/logout'));
  });

  app.get(URI('users'), (req, res) => res.send(require('../data/user/getUsers')));
  app.put(URI('user'), (req, res) => res.send(require('../data/user/newUser')));
  app.get(URI('user/:id'), (req, res) => res.send(require('../data/user/getUser')));
  app.post(URI('user/:id'), (req, res) => res.send(require('../data/user/updateUser')));
  app.delete(URI('user/:id'), (req, res) => res.send(require('../data/user/deleteUser')));
};
