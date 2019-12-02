const express = require('express');
const HttpContext = require('node-http-context');
const app = express();
const util = require('./util');

HttpContext.Initilize(app);

app.use('/test', (req, res, next) => {
    HttpContext.Response.json({ success: true });
});

app.use('/test2', (req, res, next) => {
    util.someAction();
});

app.listen(5000, () => {
    console.log("Server started");
});