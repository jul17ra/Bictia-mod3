const verificarToken = require('../config/verificartoken')
const express = require('express'),
router =  express.Router(),
productsctrl = require('../controllers/products.controller')

router.post('/', verificarToken, productsctrl.create)
router.get('/', productsctrl.list)
/*router.delete('/:_id', userctrl.delete)
router.put('/', userctrl.update) */

module.exports = router