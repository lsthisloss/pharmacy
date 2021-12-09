const Router = require('express')
const router = new Router()
const directionController = require('../controllers/directionController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), directionController.create)
router.get('/',directionController.getAll)
module.exports = router