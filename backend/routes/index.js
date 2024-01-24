const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./user');
const accountRouter = require('./account');

const mainRouter = express.Router();

mainRouter.use('/user', userRouter);
mainRouter.use('/account', accountRouter);

module.exports = mainRouter