const express = require('express'),
router =  express.Router(),
loginctrl = require('../controllers/login.controller')

router.post('/', loginctrl)
// router.get('/', agentsctrl.list)
/*router.delete('/:_id', userctrl.delete)
router.put('/', userctrl.update) */

module.exports = router