var express = require('express');
var router = express.Router();

/* api for form get post data and response the same */
router.post('/', function(req, res, next) {
  res.send(req.body);
});

module.exports = router;
