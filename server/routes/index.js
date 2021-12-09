const Router = require('express')
const router = new Router()
const substanceRouter = require('./substanceRouter')
const drugRouter = require('./drugRouter')
const userRouter = require('./userRouter')
const directionRouter = require('./directionRouter')

router.use('/direction', directionRouter)
router.use('/substance', substanceRouter)
router.use('/drug', drugRouter)
router.use('/user', userRouter)

module.exports = router
