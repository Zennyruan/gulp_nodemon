'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();
app.set('view engine', 'jade');
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.render('../public/index.jade');
});

app.listen(5000);
