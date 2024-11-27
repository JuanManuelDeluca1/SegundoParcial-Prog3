const postAutor = require("../models/postAutor.js");

const traerAutores =async (req, res)=>{
    try{
        const posteoA = await postAutor.findAll();
        res.json(posteoA);
    }catch(error){
        res.json({message:error.message})
    }

}

const traerAutor =async (req, res)=>{
    try{
        const posteoA = await postAutor.findByPk(req.params.id);
        res.json(posteoA);
    }catch(error){
        res.json({message:error.message})
    }

}

const crearAutor =async(req,res)=>{
    try{
        await postAutor.create(req.body);
        console.log("Resgistro creado correctamente");
    }catch (error){
        res.json({message:error.message})   
    }
}

const actualizarAutor = async(req, res)=> {
    try{
        await postAutor.update (req.body,{
            where:{id:req.params.id}
        })
        res.json("Actualizacion OK")
    }catch (error){
        res.json({message:error.message}) 
    }
}

const borrarAutor = async (req,res)=>{
    try {
      await postAutor.destroy({
        where:{id:req.params.id}
      })
      res.json ( "Autor Borrado Correctamente")
    } catch (error) {
      res.json({message:error.message})
    }
}

module.exports = {traerAutores, traerAutor, crearAutor, borrarAutor, actualizarAutor}