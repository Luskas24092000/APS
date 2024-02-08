class Configuracao {
    constructor() {
        this.tema = "claro";
        this.idioma = "pt-br";
        this.tamanhoFonte = 14;
    }

    static getInstance() {
        if (!this._instance) {
            this._instance = new Configuracao();
        }
        return this._instance;
    }

}

module.exports = Configuracao;
