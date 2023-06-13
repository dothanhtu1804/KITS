const express = require('express')
const router = express.Router();
const bookControllers = require('../controllers/book')

// res.send trả về cho frontEnd dùng
router.get('/get-list-products', bookControllers.getAllBooks);

module.exports = router; // khai báo router trên xong thì cần exports ra ngoài để bên ngoài dùng