
const express = require('express')
const router = express();
const postController = require('../controllers/postController');


router.get('/', postController.get)
router.post('/', postController.post)
router.put('/:id', postController.put)
router.delete('/:id', postController.delete)





module.exports = router;