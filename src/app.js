require('dotenv').config()

const express = require('express')
const app = express()

// IMPORTAR RUTAS
const itemsRoutes = require('./routes/items')
const authRoutes = require('./routes/auth')

// MIDDLEWARE
app.use(express.json())

// USAR RUTAS
app.use('/api', itemsRoutes)
app.use('/', authRoutes)

// SERVIDOR
app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en puerto " + process.env.PORT)
})