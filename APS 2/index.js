const WindowsFactory = require('./factories/WindowsFactory');
const MacOSFactory = require('./factories/MacOSFactory');

function createUI(factory) {
    const button = factory.createButton();
    return button;
}

let factory;
if (process.platform === 'win32') {
    factory = new WindowsFactory();
} else if (process.platform === 'darwin') {
    factory = new MacOSFactory();
} else {
    throw new Error('Sistema operacional não suportado.');
}

const button = createUI(factory);
button.click();
