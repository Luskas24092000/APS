const ILog = require('./ILog');

class LogConsole extends ILog {
    registrar(msg) {
        console.log(`Registrando log no console: ${msg}`);
    }
}

module.exports = LogConsole;
