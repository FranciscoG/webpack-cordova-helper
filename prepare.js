const { execSync } = require('child_process');

/**
 * webpack-cordova-helper/prepare
 * Runs `cordova prepare [platform]` when a build is completed
 */

var defaults = {
  platform : '', // no platform means it will update all platforms already added
  cwd : process.cwd()
}

/**
 * The entry file to the plugin to instantiate it with options
 * 
 * @param {Object} options besides platform, it also takes any options available to child_process.execSync
 * @param {string} options.platform the platform target
 */
function WebpackCordovaPrepare(options) {
  this.options = Object.assign({}, defaults, options);
};

WebpackCordovaPrepare.prototype.apply = function(compiler) {
  const prepareCmd = `cordova prepare ${this.options.platform}`;
  
  // because the rest of the options are a pass-through to execSync
  // we can remove `platform` from options
  delete this.options.platform; 

  // hook into the 'done' 
  compiler.plugin('done', () => {
    console.log('------------------------------------------')
    console.log(`Running: ${prepareCmd}`);
    let prepareResult = execSync(prepareCmd, this.options).toString();
    console.log(prepareResult);
    console.log('------------------------------------------')
  });
};

module.exports = WebpackCordovaPrepare;