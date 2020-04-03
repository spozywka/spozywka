const { override, fixBabelImports, addLessLoader } = require('customize-cra');

const primaryColor = '#2ee461';

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': primaryColor,
      '@info-color': primaryColor,
      '@processing-color': primaryColor,
    },
  })
);
