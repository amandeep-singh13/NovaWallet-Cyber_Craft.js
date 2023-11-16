// importing express module
const express = require('express');
const { addTransaction, getAllTransactions } = require('../controllers/transactionCtrl');

//router object
const router = express.Router();

//routes
//add transaction POST Method
router.post('/add-transaction', addTransaction)

//get transaction
router.post('/get-transaction', getAllTransactions )

module.exports = router;