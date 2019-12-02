# Node Http Context
Get http context anywhere in node/express application.

## How to use it

Install: `npm install --save node-http-context`

``` js
const express = require('express');
const httpContext = require('node-http-context');

const app = express();
// Initialize Httpcontext middleware service
HttpContext.Initilize(app);
// After initialize the httpcontext we can get httpcontext anywhere
```

Get HttpContext form anywhare:

``` js
const httpContext = require('node-http-context');

//Node express request object from HttpContext
httpContext.Request;

//Node express response object from HttpContext
httpContext.Response.send(HTML/STRING);
httpContext.Response.json({JSON_Object});

//Node express Next object from HttpContext
httpContext.Next();

//Node express session object from HttpContext
httpContext.Session;
```

## Contributors
* Devesh Kumar (@dkrockcom)
