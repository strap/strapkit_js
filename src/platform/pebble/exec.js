var strapkit = require('strapkit');

function pebbleExec(success, fail, service, action, args) {
	pebble_bridge.exec(service, action, args, success, fail);
};

module.exports = pebbleExec;