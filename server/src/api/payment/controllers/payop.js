'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::payment.payment', ({ strapi }) => ({
  async ipn(ctx) {
    try {
      const body = ctx.request.body;
      console.log('IPN request')
      if (body.transaction.state == 2) {
        let order = await strapi.db.query('api::order.order').findOne({
          where: { id: body.transaction.order.id },
          populate: ['smurf', 'coupon']
        });
        if (order == null || order.isPaymentCredited) {
          ctx.status = 200;
          ctx.body = 'ok';
          return;
        }
        const allCredentials = order.smurf.credentials.split('\n');
        const accountsForDelivery = allCredentials.slice(0, order.quantity).join('\n');
        const restAccountCredentials = allCredentials.slice(order.quantity).join('\n');
        await strapi.db.query('api::order.order').update({
          where: { id: body.transaction.order.id },
          data: {
            isPaymentCredited: true,
            delivered_accounts: accountsForDelivery
          }
        })
        await strapi.db.query('api::smurf.smurf').update({
          where: { id: order.smurf.id },
          data: {
            credentials: restAccountCredentials
          }
        })
        await strapi
          .plugin('email')
          .service('email')
          .send({
            from: 'no-reply@smurfs.lol',
            to: order.email,
            subject: 'Account(s) Details',
            text: accountsForDelivery,
          });
        await strapi
          .plugin('email')
          .service('email')
          .send({
            from: 'no-reply@smurfs.lol',
            to: 'smurfslollogs@yandex.ru',
            subject: order.email,
            text: accountsForDelivery
          });
      }
      ctx.status = 200
      ctx.body = 'ok'
    } catch (err) {
      console.log(err)
      ctx.status = 500
      ctx.body = 'ok'
    }
  }
}))
