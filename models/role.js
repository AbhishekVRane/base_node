const Datastore = require("nedb-promises");

const roleDb = Datastore.create("/path/to/role.db");

module.exports = roleDb;
