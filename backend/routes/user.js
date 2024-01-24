const {Router} = require('express')
const zod = require('zod')
const { User, Account } = require( '../db/db' )
const jwt = require('jsonwebtoken')
const token = require( '../config' )
const { jwtPass } = require( '../secrates' )
const {authMiddleware} = require('../middlewares/middleware')
const userRouter = Router()

userRouter.post('/signup',async (req,res) => {

    const validation = zod.object({
        username :  zod.string().email(),
        password : zod.string().min(6),
        firstname : zod.string(),
        lastname : zod.string()
    })
    const userDetails = req.body

    const success = validation.safeParse(userDetails)


    if(!success.success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const existingUser = await User.findOne({
        username : req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    })
    const userId = user._id;

    const randomBalance = () => {
        return Math.floor(Math.random() * 10000)
    }

    const account = await Account.create({
        userId : userId,
        balance : randomBalance()
    })

    const token = jwt.sign({
        userId
    }, jwtPass);

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
        })

        if(!user){
            res.status(403).json({
                message : "Plese enter valid username"
            })
            return;
        }

        const token = jwt.sign({userId : user._id},jwtPass)

        res.status(200).json({
            token : token
        })
})


userRouter.put("/update", authMiddleware, async (req, res) => {

    const updateBody = zod.object({
        password: zod.string().optional(),
        firstname: zod.string().optional(),
        lastname: zod.string().optional(),
    })

    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }
    const user = await User.updateOne({
        _id: req.userId
    },req.body)

    res.json({
        message: "Updated successfully"
    })
})

userRouter.get('/bulk', async (req,res) => {
    const query = req.query
    const users =  await User.find({
        "$or": [
            { firstname:{
                "$regex" : query.firstname , $options: 'i'
            }}
        ]
    },{password : 0})
    
    res.json({
        users
    })
})

module.exports = userRouter;