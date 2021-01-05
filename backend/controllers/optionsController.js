const api = require('../services/api')

module.exports.getOptions = async ({ res }) => {
  try {    
    const optionsMeta = await api.get('/options')
    const optionsdata = optionsMeta.data
    
    const { recomendada, montar } = optionsdata
    const options = [recomendada, montar]
    
    res.json(options)
  } 
  catch (error) {
    throw new Error(error)
  }
}