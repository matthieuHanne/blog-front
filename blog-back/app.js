var express = require('express');
var app = express();
/**
 *database
 */

// configure the host and port
//var db = require('riak-js').getClient({host: "riak.myhost", port: "8098"});

app.use(require('./modules/posts'));


app.listen(3000);
console.log('listening on port 3000');









