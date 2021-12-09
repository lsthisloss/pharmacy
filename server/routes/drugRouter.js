const Router = require('express')
const router = new Router()
const drugController = require('../controllers/drugController')

router.post('/',drugController.create)
router.get('/',drugController.getAll)
router.get('/:id',drugController.getOne)
module.exports = router