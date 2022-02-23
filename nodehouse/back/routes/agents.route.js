const express = require('express'),
router =  express.Router(),
agentsctrl = require('../controllers/agents.controller')

router.post('/', agentsctrl.create)
router.get('/', agentsctrl.list)
/*router.delete('/:_id', userctrl.delete)
router.put('/', userctrl.update) */

module.exports = router