const {Router} = require('express');
const { User, Account } = require( '../db/db' );
const { default: mongoose } = require( 'mongoose' );

const accountRouter = Router();

accountRouter.get('/balance', async(req,res) => {
    const account = await Account.findById({
        userId : req.userId
    })

    res.status(200).json({
        balance : account.balance
    })
})

accountRouter.post('/transfer', async (req,res) => {

    const session = await mongoose.startSession();

    session.startTransaction()
    const {amount,to} = req.body

    const senderAccount = await Account.findById({
        userId : req.userId
    }).session(session);

    if(!senderAccount || senderAccount.balance < amount){
        session.abortTransaction();
        res.status(400).json({
            message : "Insufficient balance"
        })
    }

    await fidnbyIdAndUpdate(userId ,{$inc :{balance :-amount}})

    const receiverAccount =  await Account.findById({
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
