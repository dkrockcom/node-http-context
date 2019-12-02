const Util = require('./Util');

class HttpContext {
    /**
     * @param {Object} app - Express application instance.
     */
    static Initilize(app) {
        if (app) {
            app.use(Util.middleware);
            app.use((req, res, next) => {
                Util.set('Request', req);
                Util.set('Response', res);
                Util.set('Next', next);
                Util.set('Session', req.session || null);
                next();
            });
        } else {
            throw new Error("express not define");
        }
    }

    static get Request() { return Util.get('Request') }
    static get Response() { return Util.get('Response') }
    static get Next() { return Util.get('Next') }
    static get Session() { return Util.get('Session') }
}
module.exports = HttpContext;