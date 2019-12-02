const HttpContext = require('node-http-context');

module.exports = {
    someAction: () => {
        HttpContext.Response.send("Welcome");
    }
}