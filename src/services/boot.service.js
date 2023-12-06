const argv = require('yargs').argv;

global.exec_mode = 'dev';
  
if (argv.mode) {
    const modeValue = argv.mode;
    const allowedModes = ['dev', 'pro'];

    if (allowedModes.includes(modeValue)) {
        global.exec_mode = modeValue;
    } else {
        console.log('Invalid mode. Allowed modes are: dev, pro, uat. Running in dev mode.');
    }
}

function getExecutionMode() {
  return global.exec_mode;
}

module.exports = {
  getExecutionMode,
};