var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

var studentRoutes = require('./routes/Students');

// Apply global middleware (body-parser and CORS) before defining routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Mount the student routes on the /api/ path
app.use('/api/', studentRoutes);

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);
