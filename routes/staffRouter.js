var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Staff = require('../models/Staff');

var staffRouter = express.Router();
staffRouter.use(bodyParser.json());

staffRouter.route('/')
.get(function (req, res, next) {
    Staff.find({}, function (err, staff) {
        if (err) throw err;
        res.json(staff);
    });
})

.post(function (req, res, next) {
    Staff.create(req.body, function (err, staff) {
        if (err) throw err;
        console.log('staff created!');
        var id = staff._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the staff with id: ' + id);
    });
})
.delete(function (req, res, next) {
    Staff.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

module.exports = staffRouter;