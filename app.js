const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const app = express();
const hash = process.env.NODE_ENV === 'production' ? require("./stats.json").hash : '';

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configurations
app.set('views', path.join(__dirname, 'templates'));
nunjucks.configure(app.get('views'), {
  autoescape: true,
  watch: true,
  noCache: true,
  express: app
});

app.use('/static', express.static('dist'));
require('./server/routes')(app, hash);

module.exports = app;