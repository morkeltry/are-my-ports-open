const express = require('express');
const path = require('path');
const serveStatic = require('serve-static')
const favicon = require('serve-favicon');;
const cookieParser = require('cookie-parser');
const cors = require('cors');

const router = require('./controllers/index');
// const helpers = require ('./views/helpers');
// const proxy = require('./proxy')

const app = express();


app.set('port', process.env.PORT || 8000);

app.use(cookieParser());
app.use(cors());

app.use(serveStatic('public', { 'index': ['pingpage.html'] }))
// app.use('/', proxy);

// app.use(router);

module.exports = app;
