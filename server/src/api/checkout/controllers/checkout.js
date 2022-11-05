const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::checkout.checkout', ({ strapi }) => ({
  async smurf(ctx) {
    try {
      const body = ctx.request.body

      const isSmurfValid = await strapi.service('api::smurf.smurf').validate(body.order.smurf);
      const isCouponValid = body.coupon == '' ? true : await strapi.service('api::coupon.coupon').validate(body.coupon);

      if (isSmurfValid && isCouponValid) {
        const cost = await strapi.service('api::checkout.smurf').calcCost(body);
        // Создание и добавление заказа в БД с актуальными данными из checkout формы
        let order = await strapi.db.query('api::order.order').create({
          data: {
            "email": body.customer.email,
            "smurf": body.order.smurf.id,
            "quantity": body.order.quantity,
            "cost": cost,
            "newsletter": body.newsletter,
            "coupon": body.coupon.id,
          },
          populate: ['smurf', 'coupon']
        })
        const signature = await strapi.service('api::payment.payop').generateSignature(order);
        return await strapi.service('api::payment.payop').requestPayopInvoice(order, signature);
      }
    } catch (err) {
      console.log(err);
      ctx.status = 500;
      ctx.body = 'error';
    }
  },
  async customPayment(ctx) {
    try {
      const body = ctx.request.body
      const signature = await strapi.service('api::payment.payop').generateSignatureForCustomPayment(body);
      return await strapi.service('api::payment.payop').requestPayopInvoiceForCustomPayment(body, signature);
    } catch (err) {
      console.log(err)
      ctx.status = 500;
      ctx.body = 'error'
    }
  }
}))
