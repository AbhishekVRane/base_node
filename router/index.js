const healthRoute = require("./health"); // to check health of app

//create array of all route groups
let route = [
  {
    path: "/health",
    router: healthRoute,
  }
];

module.exports = route;
