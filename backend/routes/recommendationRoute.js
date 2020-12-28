const { Router } = require('express')
const recommendationController = require('../controllers/recommendationController')

const router = Router()

router.get('/recommendations', recommendationController.getRecommendation)

module.exports = router