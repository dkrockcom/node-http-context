const cls = require('cls-hooked');
const ns = cls.createNamespace("Request-Context-5195409c4e8d71bf5dd408342f5942bb");

class Util {
    static middleware(req, res, next) {
        ns.run(() => next());
    }
    static get(key) {
        if (ns && ns.active) {
            return ns.get(key);
        }
    }
    static set(key, value) {
        if (ns && ns.active) {
            return ns.set(key, value);
        }
    }
}
module.exports = Util;