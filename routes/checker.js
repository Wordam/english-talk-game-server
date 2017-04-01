module.exports = server => {

  var ginger = require('ginger-correct');

  /**
  * Handle POST requests
  * Check the given text
  */
  server.get('/checker/:text', (req, res, next) => {
    var text = req.params['text'];
    text = text.split('+').join(' ');
    ginger.check(text, function(err, data) {
       res.send(data);
       next();
    });
  });
}
