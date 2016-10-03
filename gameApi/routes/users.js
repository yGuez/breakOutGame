var express = require('express');
var nano = require('nano')('http://localhost:5984').use("user_y"); 
var router = express.Router();

/* GET users listing. */
router.get('/users/', function(req, res, next) {
  res.send('respond with a resource');
  user_y.get(id, function (error, existing) {
        if (!error) {
            mylib.destroy(id, existing._rev, function (err, body, header) {
                if (!error) {
                    response.writeHead(200, { "Content-Type": "text/plain" });
                    response.end("Book deleted. Response: " + JSON.stringify(body) + "\n");
                }
            })
        }
    });
});

module.exports = router;
