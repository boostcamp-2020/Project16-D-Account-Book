const db = require("../models");

module.exports = async () => {
  try {
    await db.sequelize.sync({ force: false });
  } catch (error) {
    throw new Error(error);
  }
};
