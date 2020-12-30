const { Router } = require('express')
const optionsController =  require('../controllers/optionsController')

const router = Router()

router.get('/options', optionsController.getOptions)

module.exports = router