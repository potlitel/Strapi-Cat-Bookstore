'use strict';
//const { sanitizeEntity } = require("strapi-utils");

/**
 *  cat controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cat.cat', ({ strapi }) => ({
  async findEsperanza(ctx) {
    const entries = await strapi.db.query("api::cat.cat").findMany({
    where: { esperanza_vida: "10-15 años" }
  });

  ctx.body = entries;
  },
  async findOrigen(ctx) {
    const { valorOrigen } = ctx.params;
    console.info(valorOrigen);
    const entries = await strapi.db.query('api::cat.cat').findMany({
          where: {
            origen: {
              Pais: {
                $contains: "Rusia"
              },
            }
          },
        });
        ctx.body = entries;
  },
})
);

//module.exports = {};
