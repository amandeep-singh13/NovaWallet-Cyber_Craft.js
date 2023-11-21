const transactionModel = require("../models/transactionModel")
const moment = require('moment')

const getAllTransactions = async (req,res) => {
    try {
        const {frequency, selectedDate, type} =req.body;
        const transactions = await transactionModel.find({
            userid:req.body.userid,
            ...(frequency !== 'custom' ? {
                date:{
                    $gt : moment().subtract(Number(frequency), 'd').toDate(),
                },
            } : {
                date:{
                    $gte: selectedDate[0],
                    $lte: selectedDate[1],
                },
            }),
            ...(type !== 'all' && { type }),
            
        });
        res.status(200).json(transactions);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const editTransaction = async (req, res) => {
    try {
        await transactionModel.findByIdAndUpdate(
            { _id:req.body.transactionId },
            req.body.payload
        );
        res.status(200).send('Edited Successfully')
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

const deleteTransaction = async (req, res) => {
    try {
        await transactionModel.findOneAndDelete(
            { _id:req.body.transactionId } 
        );
        res.status(200).send('Transaction Deleted')
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

const addTransaction = async (req,res) => {
    try {
        const newTransaction = new transactionModel(req.body)
        await newTransaction.save()
        res.status(201).send('Transaction Created')
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

module.exports = {getAllTransactions, addTransaction, editTransaction, deleteTransaction}