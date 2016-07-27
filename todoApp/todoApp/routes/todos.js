/*var express = require('express');
var router = express.Router();*/

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
*/

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');

/* GET /todos listening */
router.get('/', function(req, res, next) {
    Todo.find(function (err, todos) {
        if (err) return next(err);
        res.json(todos);
    });
});

router.get('/:id', function(req, res, next) {
    Todo.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;

/* POST /todos */
router.post('/', function(req, res, next) {
    Todo.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
    Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
    Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});