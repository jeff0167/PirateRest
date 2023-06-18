const Sequelize = require("sequelize");
const sequelize = new Sequelize('pirates', 'root', '', {
  host: "localhost",
  dialect: "mysql",
  port: 3306  // 3306 is default, have to match phpMyAdmin localhost address?
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.pirates = require("./pirate.model.js")(sequelize, Sequelize);

module.exports = db;