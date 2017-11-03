var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Customers = require('../models/customers');

var customerRouter = express.Router();
customerRouter.use(bodyParser.json());

customerRouter.route('/')
.get(function (req, res, next) {
    Customers.find({}, function (err, Customer) {
        if (err) 
        throw err;
        res.json(Customer);
    });
})

.post(function (req, res, next) {
    Customers.create(req.body, function (err, Customer) {
        if (err) 
        throw err;
        console.log('Customer created!');
        var id = Customer._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the Customer with id: ' + id);
    });
})
.delete(function (req, res, next) {
    Customers.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});


    module.exports = customerRouter;
