const { where } = require("sequelize");
const postJuegos = require("../models/postJuegos.js");
const postAutor = require("../models/postAutor.js");

const traerJuegos =async (req, res)=>{
    try{
        const posteoJ = await postJuegos.findAll();
        res.json(posteoJ);
    }catch(error){
        res.json({message:error.message})
    }

}

const traerJuego =async (req, res)=>{
    try{
        const posteoJ = await postJuegos.findByPk(req.params.id);
        res.json(posteoJ);
    }catch(error){
        res.json({message:error.message})
    }

}


const crearJuego =async(req,res)=>{
    try{
        const {idAutor} = req.body;
        const autorExiste = await postAutor.findByPk(idAutor);
        if(!autorExiste)
        {
            console.log("El id autor no se encontro");
            res.json({message:"El id del autor ingresado no existe"});
        }
        else
        {
            await postJuegos.create(req.body);
            console.log("Resgistro creado correctamente");
        }
    }catch (error){
        res.json({message:error.message})   
    }
}

const actualizarJuego = async(req, res)=> {
    try{
        await postJuegos.update (req.body,{
            where:{id:req.params.id}
        })
        res.json("Actualizacion OK")
    }catch (error){
        res.json({message:error.message}) 
    }
}

const borrarJuego = async (req,res)=>{
    try {
      await postJuegos.destroy({
        where:{id:req.params.id}
      })
      res.json ( "Juego Borrado Correctamente")
    } catch (error) {
      res.json({message:error.message})
    }
}

const obtenerJuegosOrdenados = async (req, res) => {
    try {
        const sort = req.query.sort || 'ASC';
        const order = sort.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

        const posteoJ = await postJuegos.findAll({
            order: [['createdAt', order]] 
        });
        res.json(posteoJ);
    } catch (error) {
        res.json({ message: error.message }); 
    }
};

const filtrarJuegoTipo = async (req, res) => {
    try {
        const {type} = req.query;
        const condicion = type ? {categoria:type} : {};
        const juegoFiltrado = await postJuegos.findAll({
            where:condicion
        })
        res.json(juegoFiltrado);
    } catch (error) {
        res.json({ message: error.message }); 
    }
}

const filtrarJuegosPorEstado = async (req, res) => {
    try {
        const { status } = req.query;
        const whereCondition = status ? { disponible: status === 'active' ? 1 : 0 } : {};
        const juegosFiltrados = await postJuegos.findAll({
            where: whereCondition, 
        });
        res.json(juegosFiltrados);
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = {traerJuegos, traerJuego, crearJuego, actualizarJuego, borrarJuego, obtenerJuegosOrdenados, filtrarJuegoTipo, filtrarJuegosPorEstado};