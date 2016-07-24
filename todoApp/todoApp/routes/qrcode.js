var express = require('express');
var router = express.Router();

var qr = require('qr-image');

/* GET home page. */
router.post('/', function(req, res){
    var code = qr.image(req.body.text, {
        type: 'svg',
        ec_level: 'H',
        size: 10,
        margin: 0
    });
    console.log(req.body);
    res.type('svg');
    code.pipe(res);
}); 

module.exports = router;