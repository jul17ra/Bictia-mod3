const verificarToken = require('../config/verificartoken')
const express = require('express'),
router =  express.Router(),
reservasctrl = require('../controllers/reservas.controller')

router.post('/', reservasctrl.create)
router.get('/', verificarToken, reservasctrl.list)
/*router.delete('/:_id', userctrl.delete)
router.put('/', userctrl.update) */

module.exports = router