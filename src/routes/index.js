const path = require('path');
const apiHelper = require('../../middleware/apiHelper');

module.exports = (app, config) => {
  const API = new apiHelper(app);
  const URI = (path) => (config.API_BASE_PATH + path);

  // Example
  API.POST(URI('login'), require('../data/auth/login'), (req, res) => {
    res.cookie('AuthToken', 'bad18eba1ff45jk7858b8ae88a77fa30', config.COOKIE_OPTIONS);
    res.cookie('uid', 12, config.COOKIE_OPTIONS);
  });
  API.POST(URI('logout'), require('../data/auth/logout'), (req, res) => {
    res.clearCookie('AuthToken');
    res.clearCookie('uid');
  });

  API.GET(URI('users'), require('../data/user/getUsers'));
  API.PUT(URI('user'), require('../data/user/newUser'));
  API.GET(URI('user/:id'), require('../data/user/getUser'));
  API.POST(URI('user/:id'), require('../data/user/updateUser'));
  API.DELETE(URI('user/:id'), require('../data/user/deleteUser'));
};
