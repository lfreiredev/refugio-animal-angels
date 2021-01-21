"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    let entities = await strapi.services.dog.find(ctx.query);
    let count = await strapi.services.dog.count(ctx.query);
    return { count, entities };
  },
};
