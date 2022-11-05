'use strict';

/**
 *  coupon controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::coupon.coupon', ({ strapi }) => ({
  async verify(ctx) {
    try {
      const entity = await strapi.db.query('api::coupon.coupon').findOne({where: { code: ctx.query.coupon }});
      // const entity = await strapi.service('api::coupon.coupon').findOne(1);
      if (entity != null) {
        const sanitizedEntity = await this.sanitizeOutput(entity);
        // Проверка, что купон уже начал действовать
        if (new Date() < new Date(entity.start_date)) {
          return { status: "warning", statusText: `This coupon code does not exist`, content: sanitizedEntity }
        }
        // Проверка, что купон ещё действует
        if (new Date() > new Date(entity.end_date)) {
          return { status: "warning", statusText: "This coupon code has expired", content: sanitizedEntity }
        }
        // Проверка, что купон ещё не исчерпал лимит своих использований
        if (entity.stock != "infinity" && entity.stock <= 0) {
          return { status: "warning", statusText: "This coupon code has reached the limit of its uses", content: sanitizedEntity }
        }
        // Срабатывает, если все существующие проверки были пройдены
        return { status: "OK", content: sanitizedEntity }
      } else {
        return { status: "warning", statusText: "This coupon code does not exist", content: false }
      }
    } catch (err) {
      console.log(err);
      ctx.body = err;
    }
  },
}));
