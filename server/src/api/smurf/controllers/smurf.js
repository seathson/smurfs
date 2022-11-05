'use strict';

/**
 *  smurf controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::smurf.smurf', ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.service('api::smurf.smurf').find({populate: ['server']});

    const data = entity.results;
    let processedSmurfs = [];

    data.forEach(async element => {
      if (element.credentials != '' && element.credentials != null) {
        element.stock = element.credentials.split('\n').length;
        // Не удалять строчку ниже! Она препятствует передаче на фронтенд данных о логинах и паролях
        delete element.credentials; // Не удалять
        // Не удалять строчку выше!
        processedSmurfs.push(element);
      }
    });

    return processedSmurfs;
  }
}));
