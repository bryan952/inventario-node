const express = require('express')
const router = express.Router()
const items = require('../controllers/itemsController')
const auth = require('../middleware/auth') // SOLO UNA

router.get('/items', auth, items.getItems)
router.get('/items/:id', auth, items.getItem)
router.post('/items', auth, items.createItem)
router.put('/items/:id', auth, items.updateItem)
router.delete('/items/:id', auth, items.deleteItem)

module.exports = router