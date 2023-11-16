// importing express module
const express = require('express');
const { 
    addTransaction, 
    getAllTransactions,
    editTransaction,
    deleteTransaction
} = require('../controllers/transactionCtrl');

//router object
const router = express.Router();

//routes
//add transaction POST Method
router.post('/add-transaction', addTransaction)

//edit transaction POST Method
router.post('/edit-transaction', editTransaction)

//delete transaction POST Method
router.post('/delete-transaction', deleteTransaction)

//get transaction
router.post('/get-transaction', getAllTransactions )

module.exports = router;