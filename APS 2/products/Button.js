class Button {
    constructor() {
        this.label = 'Default Button';
    }

    click() {
        console.log(`${this.label} clicked.`);
    }
}

module.exports = Button;
