'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::checkout.checkout', ({ strapi }) => ({
  async calcCost({ order, coupon }) {
    const basicCost = order.smurf.finalPrice * order.quantity;
    if (coupon != '') {
      if (coupon.discountType == 'percentage') {
        return (basicCost - (basicCost * coupon.value / 100)).toFixed(2)
      }
      if (coupon.discountType == 'fixed') {
        let result = basicCost - coupon.value;
        if (result < 0.1) {
          return 0.1
        } else {
          return result
        }
      }
    } else {
      return basicCost
    }
  }
}))
