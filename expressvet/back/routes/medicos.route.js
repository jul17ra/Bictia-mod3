const express = require('express'),
router =  express.Router(),
medicosctrl = require('../controllers/medicos.controller')

router.post('/', medicosctrl.create)
router.get('/', medicosctrl.list)
/*router.delete('/:_id', userctrl.delete)
router.put('/', userctrl.update) */

module.exports = router