var qr = require('qr-image');
var express = require('express');
var app = express();

var readlineSync = require('readline-sync');
var input = readlineSync.question('Enter text');

app.get('/', function(req, res) {
    var code = qr.image(input, { type: 'svg' });
    res.type('svg');
    code.pipe(res);
});

app.listen(3000);