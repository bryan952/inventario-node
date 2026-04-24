const express = require('express')
const router = express.Router()
const items = require('../controllers/itemsController')

router.get('/items', items.getItems)
router.get('/items/:id', items.getItem)
router.post('/items', items.createItem)
router.put('/items/:id', items.updateItem)
router.delete('/items/:id', items.deleteItem)

module.exports = router