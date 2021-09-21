const { nodeEnv } = require("./vars.js");

const isDevelopment = nodeEnv === 'development';

module.exports = {
  isDevelopment
}
