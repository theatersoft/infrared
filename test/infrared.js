'use strict'
const {bus} = require('@theatersoft/bus')
module.exports = {
    start: f => bus.start().then(f),
    infrared: new Proxy({}, {get: (_, method) => (...args) => bus.proxy('Infrared')[method](...args).then(r => (console.log(method, r), r))})
}