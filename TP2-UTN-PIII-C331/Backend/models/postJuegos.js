const db = require("../data/db.js");

const {DataTypes} = require("sequelize");

const postJuegos = db.define("juegos",{
    categoria: {type:DataTypes.STRING},
    disponible: {type:DataTypes.BOOLEAN},
    idAutor: {type:DataTypes.INTEGER}
})

module.exports = postJuegos;