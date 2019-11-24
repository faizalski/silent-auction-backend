'use strict';

// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const errors = require('feathers-errors');

module.exports = function(options = {}) {
  // eslint-disable-line no-unused-vars
  return function(hook) {
    if (hook.data.update) {
      return hook;
    }




  };
};
