const Button = require('../products/Button');

class WindowsButton extends Button {
    constructor() {
        super();
        this.label = 'Windows Button';
    }
}

class WindowsFactory {
    createButton() {
        return new WindowsButton();
    }
}

module.exports = WindowsFactory;
