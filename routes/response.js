var express = require('express');
var router = express.Router();
var _ = require('lodash');

/* api for form get post data and response the same */
router.post('/', function(req, res, next) {
    // var responseArray = [req.body];
    _.forIn(req.body, function(value, key){
        req.body[key] = _.capitalize(value);
    });
    res.send(_.set(req.body, 'age', 40) );
});

module.exports = router;
