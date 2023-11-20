
const express = require('express')
const router = express();
const userController = require('../controllers/userController');


const multer = require("multer");
const path = require("path")

//Definindo como e onde serao armazenados os arquivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

// router.post('/cadastrar', );
router.get('/', userController.get)
router.post('/', upload.single('image'), userController.post)
router.put('/:id', userController.put)
router.delete('/:id', userController.delete)
router.post('/login', userController.login)




module.exports = router;