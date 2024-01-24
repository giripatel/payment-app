const express = require('express');
const { User, Account } = require( '../db/db' );
const { default: mongoose } = require( 'mongoose' );
const { authMiddleware } = require( '../middlewares/middleware' );

const accountRouter = express.Router();

accountRouter.get('/balance',authMiddleware, async(req,res) => {
    const account = await Account.findOne({
        userId : req.userId
    })

    res.status(200).json({
        balance : account.balance
    })
})

accountRouter.post('/transfer',authMiddleware, async (req,res) => {

    const session = await mongoose.startSession();

    session.startTransaction()
    const {amount,to} = req.body

    const senderAccount = await Account.findOne({
        userId : req.userId
    }).session(session);

    if(!senderAccount || senderAccount.balance < amount){
        session.abortTransaction();
        res.status(400).json({
            message : "Insufficient balance"
        })
    }
    
    const receiverAccount =  await Account.findOne({
        userId : to,
    }).session(session)
    
    if(!receiverAccount){
        session.abortTransaction(session)
        res.status(400).json({
            message : "Invalid user"
        })
    }
    
    await Account.updateOne({userId : req.userId},{$inc : {balance : -amount}}).session(session)
    await Account.updateOne({userId : to},{$inc : {balance : amount}}).session(session)

    res.status(200).json({
        message : "Transer successful"
    })

    session.commitTransaction();
})


module.exports = accountRouter
