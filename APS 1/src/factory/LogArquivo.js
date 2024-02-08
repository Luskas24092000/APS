const ILog = require('./ILog');

class LogArquivo extends ILog {
    registrar(msg) {
        console.log(`Registrando log em arquivo: ${msg}`);
    }
}

module.exports = LogArquivo;
