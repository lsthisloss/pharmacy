const Router = require('express')
const substanceController = require('../controllers/substanceController')
const router = new Router()

router.post('/',substanceController.create)
router.get('/',substanceController.getAll)
router.get('/:id',substanceController.getOne)
module.exports = router