const Datastore = require("nedb-promises");

const userDb = Datastore.create("/path/to/user.db");

module.exports = userDb;
