const express = require ("express");
const path = require("path");
const port = 3030;
const app = express();
const postMain = require("./routes/mainRoustes.js")
const db = require ("./data/db.js");

app.use(express.json());

const conxionDB = async()=>{
    try{
        await db.authenticate();
        console.log("conexion ok a la base de datos");
    }catch(error){
        console.log(`hay un error y es el siguiente ${error}`);
    }
};

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use("/main", postMain);

app.listen(port, ()=>{
    conxionDB()
    console.log(`Servidor de tienda de juego Ok, en el puerto ${port}`)
});


