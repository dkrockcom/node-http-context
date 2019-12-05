# Node Http Context
Get http context anywhere in node/express application.

## How to use it

Install: `npm install --save node-http-context`

``` js
const express = require('express');
const HttpContext = require('node-http-context');

const app = express();
// Initialize Httpcontext middleware service
HttpContext.Initialize(app);
// After initialize the httpcontext we can get httpcontext anywhere
```

Get HttpContext form anywhare:

``` js
const HttpContext = require('node-http-context');

//Node express request object from HttpContext
HttpContext.Request;

//Node express response object from HttpContext
HttpContext.Response.send(HTML/STRING);
HttpContext.Response.json({JSON_Object});

//Node express Next object from HttpContext
HttpContext.Next();

//Node express session object from HttpContext
HttpContext.Session;
```

## Contributors
* Devesh Kumar (@dkrockcom)
