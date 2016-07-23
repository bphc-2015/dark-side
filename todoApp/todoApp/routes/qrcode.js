var express = require('express');
var router = express.Router();

var qr = require('qr-image');

/* GET home page. */
router.post('/', function(req, res, next){
    console.log(req.body);
});

module.exports = router;