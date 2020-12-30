const { Router } = require('express')
const pointsController = require('../controllers/pointsController')

const router = Router()

router.get('/points', pointsController.getPoints)

module.exports = router