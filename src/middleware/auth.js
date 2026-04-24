const jwt = require('jsonwebtoken')

console.log("SECRET:", process.env.JWT_SECRET)

module.exports = (req, res, next) => {
  let token = req.headers['authorization']

  if (!token) {
    return res.status(403).json({ mensaje: "Token requerido" })
  }

  token = token.replace("Bearer ", "")

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (err) {
    return res.status(401).json({ mensaje: "Token inválido" })
  }
}