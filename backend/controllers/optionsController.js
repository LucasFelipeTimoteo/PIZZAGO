const api = require('../services/api')

module.exports.getOptions = async ({ res }) => {
  const optionsMeta = await api.get('/options')
  const optionsdata = optionsMeta.data
  
  const { recomendada, montar } = optionsdata
  const options = [recomendada, montar]
  
  res.json(options)
}