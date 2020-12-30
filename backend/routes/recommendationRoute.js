const { Router } = require('express')
const recommendationController = require('../controllers/recommendationController')

const router = Router()

router.get('/recommendation', recommendationController.getRecommendation)

module.exports = router