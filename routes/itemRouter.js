var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var items = require('../models/items');

var itemRouter = express.Router();
itemRouter.use(bodyParser.json());

itemRouter.route('/')
    .get(function (req, res, next) {
        items.find({}, function (err, item) {
            if (err) throw err;
            res.json(item);
        });
    })

    .post(function (req, res, next) {
        items.create(req.body, function (err, item) {
            if (err) throw err;
            console.log('item created!');
            var id = item._id;

            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('Added the item with id: ' + id);
        });
    })

    .delete(function (req, res, next) {
        items.remove({}, function (err, resp) {
            if (err) throw err;
            res.json(resp);
        });
    });

module.exports = itemRouter;