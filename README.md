# webpack-cordova-helper

A simple plugin to help you execute some of the Cordova CLI commands when Webpack completes a build



## Usage

```javascript
const CordovaHelperPlugin = require('webpack-cordova-helper');

// then add it in your webpack config plugins 
let config = {
  // other config stuff here
   
  plugins : [
    new CordovaHelperPlugin.Prepare({
      platform: 'ios',
      cwd : './'
    })
  ]
}

```

alternatively you can require each method directly (eventually, when I add more to this plugin)

```javascript
const CordovaPrepare = require('webpack-cordova-helper/prepare');

// then add it in your webpack config plugins 
let config = {
  // other config stuff here
   
  plugins : [
    new CordovaPrepare({
      platform: 'ios',
      cwd : './'
    })
  ]
}

```