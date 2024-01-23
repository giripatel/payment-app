const { Router } = require('express')
const zod = require('zod')
const { User, Account } = require( '../db/db' )
const jwt = require('jsonwebtoken')
const token = require( '../config' )
const { jwtPass } = require( '../secrates' )
const {authMiddleware} = require('../middlewares/middleware')
const userRouter = Router()


const validation = zod.object({
    username :  zod.string().email(),
    password : zod.string().min(6),
    firstname : zod.string(),
    lastname : zod.string()
})
userRouter.post('/signup',async (req,res) => {
    const userDetails = req.body

    const success = validation.safeParse(userDetails)

    if(!success){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    const existingUser = User.findOne({
        username : req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId = user._id;

    const randomBalance = () => {
        return Math.floor(Math.random() * 10000)
    }
    const account = await Account.create({
        userId : userId,
        balance : randomBalance
    })

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})

const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})

userRouter.post('/signin', async (req,res) => {
        
    const { success } = signinBody.safeParse(req.body)

        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password
        })

        if(user){
        const token = jwt.sign({userId : user._id},jwtPass)
        if(!success){
            res.status(403).json({
                message : "Plese enter correct email"
            })
        }
        res.status(200).json({
            token : token
        })
    }

    res.status(411).json({
        message: "Error while logging in"
    })
        
})


const  { authMiddleware } = require("../middleware");


// other auth routes


userRouter.put("/", authMiddleware, async (req, res) => {

    const updateBody = zod.object({
        password: zod.string().optional(),
        firstName: zod.string().optional(),
        lastName: zod.string().optional(),
    })

    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne(req.body, {
        id: req.userId
    })

    res.json({
        message: "Updated successfully"
    })
})

userRouter.get('/bulk', async (req,res) => {
    const query = req.query

    const users =  await User.find({
        $or: [
            { firstName: {
                "regex" : query.firstName
            } },
            { lastName: {
                "regex" : query.lastName
            } }
          ]
    },{password : 0})

    res.json({
        users
    })
})

module.exports = userRouter;