const db = require('../db')

// LISTAR
exports.getItems = (req, res) => {
  db.query('SELECT * FROM items', (err, results) => {
    if (err) return res.status(500).json(err)
    res.json(results)
  })
}

// OBTENER POR ID
exports.getItem = (req, res) => {
  db.query('SELECT * FROM items WHERE id=?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json(err)
    res.json(results[0])
  })
}

// CREAR
exports.createItem = (req, res) => {
  const { nombre, descripcion, estado } = req.body

  db.query(
    'INSERT INTO items (nombre, descripcion, estado) VALUES (?, ?, ?)',
    [nombre, descripcion, estado],
    (err, result) => {
      if (err) return res.status(500).json(err)
      res.json({ mensaje: "Item creado", id: result.insertId })
    }
  )
}

// ACTUALIZAR
exports.updateItem = (req, res) => {
  const { nombre, descripcion, estado } = req.body

  db.query(
    'UPDATE items SET nombre=?, descripcion=?, estado=? WHERE id=?',
    [nombre, descripcion, estado, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err)
      res.json({ mensaje: "Actualizado" })
    }
  )
}

// ELIMINAR
exports.deleteItem = (req, res) => {
  db.query('DELETE FROM items WHERE id=?', [req.params.id], (err) => {
    if (err) return res.status(500).json(err)
    res.json({ mensaje: "Eliminado" })
  })
}