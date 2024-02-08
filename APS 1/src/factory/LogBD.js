const ILog = require('./ILog');

class LogBD extends ILog {
    registrar(msg) {
        console.log(`Registrando log no banco de dados: ${msg}`);
    }
}

module.exports = LogBD;
