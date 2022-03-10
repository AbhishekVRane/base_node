const userDb = require("../models/user");
const roleDb = require("../models/role");

module.exports = async (req, res, next) => {
  try {
    await userDb.insert({ name: "abhishek", lastname: "rane" });
    await roleDb.insert({ role: "employee" });
    // await db.remove({}, { multi: true });
    let users = await userDb.find({});
    let roles = await roleDb.find({});
    if (req.query.err) {
      throw "its an error!!!";
    }
    req.response = {
      success: true,
      error: false,
      message: "app is up",
    };
    next();
  } catch (error) {
    next(error);
  }
};
