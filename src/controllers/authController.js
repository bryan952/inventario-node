const db = require('../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// REGISTER
exports.register = (req, res) => {
  const { email, password } = req.body

  const hash = bcrypt.hashSync(password, 8)

  db.query(
    'INSERT INTO users (email, password) VALUES (?, ?)',
    [email, hash],
    (err) => {
      if (err) return res.status(500).json(err)

      res.json({ mensaje: "Usuario registrado" })
    }
  )
}

// LOGIN
exports.login = (req, res) => {
  const { email, password } = req.body

  db.query('SELECT * FROM users WHERE email=?', [email], (err, results) => {
    if (err) return res.status(500).json(err)
    if (results.length === 0) return res.status(404).json({ mensaje: "Usuario no encontrado" })

    const user = results[0]

    const valid = bcrypt.compareSync(password, user.password)

    if (!valid) return res.status(401).json({ mensaje: "Contraseña incorrecta" })

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    })

    res.json({ token })
  })
}