const express = require('express');
const path = require('path');
const serveStatic = require('serve-static')
const favicon = require('serve-favicon');;
const cookieParser = require('cookie-parser');
const cors = require('cors');

// const proxy = require('./proxy')

const app = port=>
  express()
    .set('port', port)
    .use(cors())
    .use('/', (req,res)=>{
      console.log(`<p>received request on ${port}</p>`);
      res.type('text/html'); res.status(200); res.send(`<p>Received request on ${port}</p>`);
    });

// .use(serveStatic('public', { 'index': ['pingpage.html'] }))
// .use('/', proxy);

module.exports = app;
