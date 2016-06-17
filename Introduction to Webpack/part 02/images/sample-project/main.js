"use strict";

// import say-hello module
const sayHello = require('./say-hello');

sayHello('Guybrush', document.querySelector('h2'));

// create image html element and setting it's source file
var imgElement = document.createElement('img');
imgElement.src = require('./images/my-image.jpg');

// append image html element to body html element
document.body.appendChild(imgElement);
