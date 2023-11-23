// importing express module
const express = require('express');
const { 
    loginController, 
    registerController
 } = require('../controllers/userController');

const  {contactcontroller}= require('../controllers/contactcontroller');

//router object
const router = express.Router();

//routers
//POST || LOGIN USER
router.post('/login', loginController)

//POST || REGISTER USER
router.post('/register', registerController)
//contact
router.post('/contact', contactcontroller);


// exporting router
module.exports = router;