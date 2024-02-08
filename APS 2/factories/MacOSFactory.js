const Button = require('../products/Button');

class MacOSButton extends Button {
    constructor() {
        super();
        this.label = 'MacOS Button';
    }
}

class MacOSFactory {
    createButton() {
        return new MacOSButton();
    }
}

module.exports = MacOSFactory;
