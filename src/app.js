"use strict";

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'))
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if ('development' == app.get('env')) {
    app.listen(3000, function () {
        console.log('Example listening on port 3000!');
    });
} else {
    app.listen(8080, function () {
        console.log('Example listening on port 8080!');
    });
}

module.exports = app;