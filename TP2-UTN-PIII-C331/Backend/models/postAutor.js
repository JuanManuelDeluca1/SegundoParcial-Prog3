const db = require("../data/db.js");

const {DataTypes} = require("sequelize");

const postAutor = db.define("autores",{
    name: {type:DataTypes.STRING},
    surname: {type:DataTypes.STRING}
})

module.exports = postAutor;