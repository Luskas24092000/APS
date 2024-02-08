
const LogArquivo = require('./LogArquivo');
const LogConsole = require('./LogConsole');
const LogBD = require('./LogBD');

class LogFactory {
    static criarLog(tipo) {
        switch (tipo) {
            case 'arquivo':
                return new LogArquivo();
            case 'console':
                return new LogConsole();
            case 'banco':
                return new LogBD();
            default:
                throw new Error('Tipo de log desconhecido');
        }
    }
}

module.exports = LogFactory;
