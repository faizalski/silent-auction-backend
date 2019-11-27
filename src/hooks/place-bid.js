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



  //  if (hook.data.switcher == 1) {

      if (parseFloat(hook.data.current_price) <= 0) {
        throw new errors.BadRequest('Invalid Parameters', {
          errors: { current_price: 'Has to be greater than or equal to 0' }
        });
      }

        return hook.app.service('auctions').get(hook.id).then(auction => {
          const price = parseFloat(auction.current_price);
          hook.data.current_price = price + parseFloat(hook.data.current_price);


          var str1 = auction.bidlog + " ; Bidder:" + hook.params.user.id + " - Price:" + price + " - Time:" + NOW() + "" ;
          hook.data.bidlog = str1;




          return hook;
        });
  //  }
/*
    if (hook.data.switcher == 2) {
        return hook.app.service('auctions').get(hook.id).then(auction => {
          const price = 1;
          hook.data.current_price = price + parseFloat(hook.data.current_price);
          return hook;
        });
    }
*/

  };
};



function NOW() {

    var date = new Date();
    var aaaa = date.getFullYear();
    var gg = date.getDate();
    var mm = (date.getMonth() + 1);

    if (gg < 10)
        gg = "0" + gg;

    if (mm < 10)
        mm = "0" + mm;

    var cur_day = aaaa + "-" + mm + "-" + gg;

    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds();

    if (hours < 10)
        hours = "0" + hours;

    if (minutes < 10)
        minutes = "0" + minutes;

    if (seconds < 10)
        seconds = "0" + seconds;

    return cur_day + " " + hours + ":" + minutes + ":" + seconds;

}
