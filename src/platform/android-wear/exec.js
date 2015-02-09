var strapkit = require('./callbacks'),
    utils = require('./utils'),
    base64 = require('./base64');

function androidExec(success, fail, service, action, args) {
    // Set default bridge modes if they have not already been set.
    // By default, we use the failsafe, since addJavascriptInterface breaks too often


    // Process any ArrayBuffers in the args into a string.
    for (var i = 0; i < args.length; i++) {
        if (utils.typeName(args[i]) == 'ArrayBuffer') {
            args[i] = base64.fromArrayBuffer(args[i]);
        }
    }

    var callbackId = service + strapkit.callbackId++,
        argsJson = JSON.stringify(args);

    if (success || fail) {
        strapkit.callbacks[callbackId] = {success:success, fail:fail};
    }

    window.strapkit_bridge.exec(service, action, callbackId, argsJson);
}

module.exports = androidExec;

window.callbacks = strapkit;
