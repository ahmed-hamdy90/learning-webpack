"use strict";

/**
 * setting text content of HtmlElement with hello message
 *
 * @param  {string}      name    given name will used in hello message
 * @param  {HtmlElement} element Html element which it's content
 *                               will used to write hello message
 */
var sayHello = function(name, element) {
  element.textContent = 'Hello ' + name + '!';
};

module.exports = sayHello;
