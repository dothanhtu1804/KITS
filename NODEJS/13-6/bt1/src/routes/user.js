const express = require('express')
const router = express.Router();
const userControllers = require('../controllers/user')

// res.send trả về cho frontEnd dùng
router.get('/get-all-users', userControllers.getAllUsers);
router.get('/getUser/:userId', userControllers.getUserById);
router.get('/getUser', userControllers.getUserByTagName);
router.post('/createUser', userControllers.createUser);


module.exports = router; // khai báo router trên xong thì cần exports ra ngoài để bên ngoài dùng