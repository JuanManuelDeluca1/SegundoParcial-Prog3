const {Sequelize} = require("sequelize");

const db = new Sequelize("sparcial", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3307
});

module.exports = db;