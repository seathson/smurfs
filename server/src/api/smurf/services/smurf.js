'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::smurf.smurf', ({ strapi }) => ({
  async validate(smurf) {
    const dbSmurf = await strapi.service('api::smurf.smurf').findOne(smurf.id, smurf);
    if (smurf.title == dbSmurf.title && smurf.finalPrice == dbSmurf.finalPrice) {
      return true;
    } else {
      return false;
    }
  }
}));
