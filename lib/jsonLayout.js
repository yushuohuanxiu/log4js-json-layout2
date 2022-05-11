const layouts = require('log4js/lib/layouts')

let basicLayoutBak = layouts.basicLayout;
layouts.basicLayout = function (loggingEvent) {
    for (let i = 0; i < loggingEvent.data.length; i++) {
        try {
            if (typeof loggingEvent.data[i] == 'object' && (JSON.stringify(loggingEvent.data[i]) !== '{}')) {
                loggingEvent.data[i] = JSON.stringify(loggingEvent.data[i]);
            }
        } catch (err) {

        }
    }
    return basicLayoutBak(loggingEvent);
}

let colouredLayoutBak = layouts.colouredLayout;
layouts.colouredLayout = function (loggingEvent) {
    for (let i = 0; i < loggingEvent.data.length; i++) {
        try {
            if (typeof loggingEvent.data[i] == 'object' && (JSON.stringify(loggingEvent.data[i]) !== '{}')) {
                loggingEvent.data[i] = JSON.stringify(loggingEvent.data[i]);
            }
        } catch (err) {

        }
    }
    return colouredLayoutBak(loggingEvent);
}

let messagePassThroughLayoutBak = layouts.messagePassThroughLayout;
layouts.messagePassThroughLayout = function (loggingEvent) {
    for (let i = 0; i < loggingEvent.data.length; i++) {
        try {
            if (typeof loggingEvent.data[i] == 'object' && (JSON.stringify(loggingEvent.data[i]) !== '{}')) {
                loggingEvent.data[i] = JSON.stringify(loggingEvent.data[i]);
            }
        } catch (err) {

        }
    }
    return messagePassThroughLayoutBak(loggingEvent);
}

let dummyLayoutBak = layouts.dummyLayout;
layouts.dummyLayout = function (loggingEvent) {
    for (let i = 0; i < loggingEvent.data.length; i++) {
        try {
            if (typeof loggingEvent.data[i] == 'object' && (JSON.stringify(loggingEvent.data[i]) !== '{}')) {
                loggingEvent.data[i] = JSON.stringify(loggingEvent.data[i]);
            }
        } catch (err) {

        }
    }
    return dummyLayoutBak(loggingEvent);
}