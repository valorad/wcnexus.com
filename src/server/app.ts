"use strict";

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Get our API routes
import { api } from './api';

const app = express();

const clientPath = path.join(__dirname,'../client/');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(clientPath));


// Set our api routes
app.use('/api', api);

app.get('/*', (req, res) => {
    res.sendFile(path.join(clientPath,'index.html'))
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    next(err);
});

if ('development' == app.get('env')) {
    app.listen(3000, function () {
        console.log('** express started on port 3000. **');
    });
} else {
    app.listen(8080, function () {
        console.log('** express started on port 8080. **');
    });
}

export const backend = app;