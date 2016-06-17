"use strict";

// require say-hello module
const sayHello = require('./say-hello');

// require main scss file
require('./styles/main.scss');

sayHello('Guybrush', document.querySelector('h2'));
