const METHOD = {
  GET: 'get',
  PUT: 'put',
  POST: 'post',
  DELETE: 'delete'
};

function API(app) {
  this.app = app;
}

API.prototype.GET = function(uri, sendData, _callback) {
  if (this.app) {
    this.app.get(uri, (req, res) => {
      if (_callback) {
        _callback(req, res);
      }
      res.send(sendData)
    });
  }
};

API.prototype.PUT = function(uri, sendData, _callback) {
  if (this.app) {
    this.app.put(uri, (req, res) => {
      if (_callback) {
        _callback(req, res);
      }
      res.send(sendData)
    });
  }
};

API.prototype.POST = function(uri, sendData, _callback) {
  if (this.app) {
    this.app.post(uri, (req, res) => {
      if (_callback) {
        _callback(req, res);
      }
      res.send(sendData)
    });
  }
};

API.prototype.DELETE = function(uri, sendData, _callback) {
  if (this.app) {
    this.app.delete(uri, (req, res) => {
      if (_callback) {
        _callback(req, res);
      }
      res.send(sendData)
    });
  }
};

module.exports = API;