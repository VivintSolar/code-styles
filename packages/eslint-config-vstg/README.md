# eslint-config-vstg

[![npm version](https://badge.fury.io/js/eslint-config-vstg.svg)](http://badge.fury.io/js/eslint-config-vstg)

This package provides Vivint Solar Technology Group's .eslintrc as an extensible shared config.

## Usage

We export multiple ESLint configurations for your usage.

See [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

### vstg

Our default export contains all of our ESLint rules, including ECMAScript 6.

1. Install the package:

  ```sh
  npm install --save-dev eslint-config-vstg
  ```

2. Add `"extends": "vstg"` to your .eslintrc


### vstg/browser

This export is used for all raw browser-based code, not including code using webpack or other transpiling mechanisms. It should require support for our current browser support matrix.

Add `"extends": "vstg/browser"` or `"extends": [ "vstg", "vstg/browser"]` to your .eslintrc

### vstg/lambda

This export is used for all lambda-based code. The only difference it it sets the Node version to 4.x, since that's what Lambda supports.

Add `"extends": "vstg/lambda"` or `"extends": [ "vstg", "vstg/lambda"]` to your .eslintrc

### vstg/testing

This export is easy for all testing code. It adds the `mocha`, `jest`, and `jasmine` environments, and it allows things like magic numbers, and console.logs.

Add `"extends": "vstg/testing"` or `"extends": [ "vstg", "vstg/testing"]` to the .eslintrc in your testing directory


### vstg/modules

This export is used for implementations that support [Harmony Modules](http://www.2ality.com/2013/07/es6-modules.html) (so probably Babel).

Add `"extends": "vstg/modules"` or `"extends": [ "vstg", "vstg/modules"]` to your .eslintrc


### vstg/react

This export is used for React.js implementations. They should also be using Babel/Webpack or something for delivery, so it includes Harmony Modules.

Add `"extends": "vstg/react"` or `"extends": [ "vstg", "vstg/react"]` to your .eslintrc


## How can we improve this config?

Yeah, how?
