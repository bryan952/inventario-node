const express = require('express');
const router = express.Router();

const conexion = require('./db');


// INSERTAR PRODUCTO
router.post('/productos', (req, res)=>{

const {nombre, descripcion, precio, stock} = req.body;

const sql = "INSERT INTO productos(nombre,descripcion,precio,stock) VALUES(?,?,?,?)";

conexion.query(sql,[nombre,descripcion,precio,stock],(error,resultado)=>{
if(error){
throw error;
}else{
res.send("Producto agregado");
}
});

});


// MOSTRAR PRODUCTOS
router.get('/productos',(req,res)=>{

const sql = "SELECT * FROM productos";

conexion.query(sql,(error,resultado)=>{
if(error){
throw error;
}else{
res.json(resultado);
}
});

});


// ACTUALIZAR PRODUCTO
router.put('/productos/:id',(req,res)=>{

const id = req.params.id;

const {nombre,descripcion,precio,stock} = req.body;

const sql = "UPDATE productos SET nombre=?,descripcion=?,precio=?,stock=? WHERE id=?";

conexion.query(sql,[nombre,descripcion,precio,stock,id],(error,resultado)=>{
if(error){
throw error;
}else{
res.send("Producto actualizado");
}
});

});


// ELIMINAR PRODUCTO
router.delete('/productos/:id',(req,res)=>{

const id = req.params.id;

const sql = "DELETE FROM productos WHERE id=?";

conexion.query(sql,[id],(error,resultado)=>{
if(error){
throw error;
}else{
res.send("Producto eliminado");
}
});

});

module.exports = router;