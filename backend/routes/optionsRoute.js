const { Router } = require('express')
const api = require('../services/api')

const router = Router()

router.get('/options', async ({ res }) => {
  const optionsMeta = await api.get('/options')
  const optionsdata = optionsMeta.data
  
  const { recomendada, montar } = optionsdata
  const options = [recomendada, montar]
  
  res.json(options)
})

module.exports = router