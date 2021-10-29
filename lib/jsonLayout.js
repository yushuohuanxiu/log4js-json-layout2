const layouts = require('log4js/lib/layouts')

let basicLayoutBak = layouts.basicLayout;
layouts.basicLayout = function (loggingEvent) {
    for (let i=0; i<loggingEvent.data.length; i++) {
        if (typeof loggingEvent.data[i] == 'object') {
            loggingEvent.data[i] = JSON.stringify(loggingEvent.data[i]);
        }
    }
    return basicLayoutBak(loggingEvent);
}

let colouredLayoutBak = layouts.colouredLayout;
layouts.colouredLayout = function (loggingEvent) {
    for (let i=0; i<loggingEvent.data.length; i++) {
        if (typeof loggingEvent.data[i] == 'object') {
            loggingEvent.data[i] = JSON.stringify(loggingEvent.data[i]);
        }
    }
    return colouredLayoutBak(loggingEvent);
}

let messagePassThroughLayoutBak = layouts.messagePassThroughLayout;
layouts.messagePassThroughLayout = function (loggingEvent) {
    for (let i=0; i<loggingEvent.data.length; i++) {
        if (typeof loggingEvent.data[i] == 'object') {
            loggingEvent.data[i] = JSON.stringify(loggingEvent.data[i]);
        }
    }
    return messagePassThroughLayoutBak(loggingEvent);
}

let dummyLayoutBak = layouts.dummyLayout;
layouts.dummyLayout = function (loggingEvent) {
    for (let i=0; i<loggingEvent.data.length; i++) {
        if (typeof loggingEvent.data[i] == 'object') {
            loggingEvent.data[i] = JSON.stringify(loggingEvent.data[i]);
        }
    }
    return dummyLayoutBak(loggingEvent);
}