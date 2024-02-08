const RendererFactory = require('./factories/RendererFactory');
const OpenGLFactory = require('./factories/OpenGLFactory');
const DirectXFactory = require('./factories/DirectXFactory');

const openGLFactory = OpenGLFactory.instance();
const directXFactory = DirectXFactory.instance();

const textureRendererOpenGL = openGLFactory.createTextureRenderer();
const shadowRendererDirectX = directXFactory.createShadowRenderer();
