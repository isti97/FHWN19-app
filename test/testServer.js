var app = require('../app');
var http = require('http');
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

module.exports.port = port;

function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
  
    if (port >= 0) {
      return port;
    }
  
    return false;
  }

var server = http.createServer(app);

const boot = () => {
  server.listen(app.get('port'),() => {
    console.info('Express server listening on port ' + app.get('port'));
  });
}

const shutdown = () => {
  server.close();
}

module.exports.boot = boot;
module.exports.shutdown = shutdown;