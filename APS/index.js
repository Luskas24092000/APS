const Configuracao = require('./src/singleton/Configuracao');

const configuracaoInstancia = Configuracao.getInstance();

console.log("Configurações iniciais:", configuracaoInstancia);

configuracaoInstancia.tema = "escuro";
configuracaoInstancia.idioma = "pt-pt";
configuracaoInstancia.tamanhoFonte = 16;

const outraInstancia = Configuracao.getInstance();

console.log("Configurações após modificação:", outraInstancia);

console.log("As três instâncias são diferentes?", configuracaoInstancia === outraInstancia);
