const express= require('express');
const userController =require('../controller/UserController');
const router=express.Router()

router.get('/users',userController.getAllUsers)
router.get('/users/id/:id', userController.getUserById);
router.post('/users', userController.addUser);
router.put('/users/:id', userController.changeUser);
router.delete('/users/:id', userController.deleteUser)

module.exports=router;