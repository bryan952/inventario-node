const express = require('express');
const app = express();

app.use(express.static('public'));

const rutas = require('./routes');

app.use(express.json());

app.use('/api', rutas);

app.listen(3000, ()=>{
console.log("Servidor corriendo en puerto 3000");
});