"use strict";

// require say-hello module
const sayHello = require('./say-hello');

// require main css file
require('./styles/main.css');

sayHello('Guybrush', document.querySelector('h2'));
