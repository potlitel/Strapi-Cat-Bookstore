module.exports = {
  routes: [
    {
      method: "GET",
      path: "/esperanza",
      handler: "cat.findEsperanza",
    },
    {
         method: 'GET',
         path: '/origen/:valor',
         handler: 'cat.findOrigen',
         config: {
           policies: [],
           middlewares: [],
         }
    }
  ],
};
