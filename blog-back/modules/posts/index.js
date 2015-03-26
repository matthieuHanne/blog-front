'use strict';

var inspect = require('sys').inspect;
var express = require('express');
var app = module.exports = express();
var db = require('riak-js').getClient()
app.inspect = require('sys').inspect;
db.save('posts','firstPost' ,{title: "post1", date:"21-03-2013", body:"I'm the one"});
db.save('posts','secondPost' ,{title: "post2", date:"21-03-2013", body:"I'm the one"});
require('./route')(app, db);




db.remove('posts', 'firstPost');

db.exists('posts', 'firstPost');

