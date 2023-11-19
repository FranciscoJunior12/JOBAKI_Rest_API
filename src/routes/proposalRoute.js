
const express = require('express')
const router = express();
const proposalController = require('../controllers/proposalController');


router.get('/', proposalController.get)
router.post('/', proposalController.post)
router.put('/:id', proposalController.put)
router.delete('/:id', proposalController.delete)





module.exports = router;