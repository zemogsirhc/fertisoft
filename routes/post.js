const express = require('express');
const router = express.Router();
const Post = require('./../models/Post')

router.post('/libro/insertar', async(req, res) => {
    const post = new Post ({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    })
    try {
        const guardarLibro = await post.save()
        res.send(guardarLibro).status(200)
    } catch (error) {
        res.send({message:error}).status(500)
    }
})

router.get('/libro/consultar/:postId', async (req,res)=>{
    try {
        const consultarLibro = await Post.findById(req.params.postId).exec()
        res.status(200).send(consultarLibro)
    } catch (error) {
        res.status(500).send({
            message : `El libro con el registro ${req.params.postId} no fue encontrado`,
            error: error        
    })
    }
})

router.put('/libro/actualizar/:postId',async(req,res)=>{
    try {
        const libro = {
            title: req.body.title,
            description: req.body.description,
            date:req.body.date
        }
        const actualizarLibro = await Post.findByIdAndUpdate(req.params.postId,libro)
        res.status(200).send({
            message :`El Registro ${req.params.postId} fue actualizado`
        })
    } catch (error) {
        res.status(500).send({
            message : `El libro con el registro ${req.params.postId} no fue encontrado`,
            error: error        
    })  
    }
})

router.delete('/libro/eliminar/:postId', async (req,res)=>{
    try {
        const eliminarLibro = await Post.findByIdAndDelete(req.params.postId)
        res.status(200).send({
            message :`El Registro ${req.params.postId} fue eliminado`
        })
    } catch (error) {
        res.status(500).send({
            message : `El libro con el registro ${req.params.postId} no fue encontrado`,
            error: error        
    })
    }
})

module.exports = router;