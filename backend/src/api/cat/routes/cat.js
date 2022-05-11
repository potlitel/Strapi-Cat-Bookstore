'use strict';

/**
 * cat router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cat.cat');

/*module.exports = {
  routes: [
    {
      method: "GET",
      path: "/cats/all-hellos",
      handler: "cat.findAlain",
    },
  ],
};*/
