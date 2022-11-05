'use strict';

/**
 * my-contact service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-contact.my-contact');
