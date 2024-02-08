const LogFactory = require('./LogFactory');

const tipoLog = 'arquivo'; 

const logger = LogFactory.criarLog(tipoLog);
logger.registrar('Mensagem de log');

const LogFactory = require('./LogFactory');
