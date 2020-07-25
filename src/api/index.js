const express = require('express');
const router = require('./route');
const app = express();
app.use(router);
module.exports = app;
