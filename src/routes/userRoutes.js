
const express = require('express')
const router = express();
const userController = require('../controllers/userController');


router.get('/', userController.get)
router.post('/', userController.post)
router.put('/:id', userController.put)
router.delete('/:id', userController.delete)
router.post('/login', userController.login)




module.exports = router;