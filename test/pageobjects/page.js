export default class Page {
    open(path) {
        browser.url(path)
    }
    logMessage(message) {
        process.emit('test:log', message);
    }
}
