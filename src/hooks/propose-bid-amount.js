'use strict';

// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const errors = require('feathers-errors');

module.exports = function(options = {}) {
  // eslint-disable-line no-unused-vars
  return function(hook) {
    /*
    if (hook.data.update) {
      return hook;
    }

    if (parseFloat(hook.bidprice) <= parseFloat(auction.current_price)) {
      throw new errors.BadRequest('Offered bidding price below current bid price', {
        errors: { current_price: 'Bidding price is lower than the current top bid price. Try a higher price.' }
      });
    }

    return hook.app.service('auctions').get(hook.id).then(auction => {
      const price = 1;
      hook.data.current_price = price + parseFloat(hook.data.current_price);
      return hook;
    });
*/
  };
};
