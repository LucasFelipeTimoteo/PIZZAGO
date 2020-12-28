const { Router } = require('express')
const pizzaController = require('../controllers/pizzaController')

const router = Router()

router.get('/doughs', pizzaController.getDoughs)

router.get('/sizes', pizzaController.getSizes)

router.get('/fillings', pizzaController.getFillings)

module.exports = router