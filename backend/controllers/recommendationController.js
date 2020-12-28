const api = require('../services/api')

module.exports.getRecommendation =  async (req, res) => {
  const recommendationsList = await api.get('/recommendations')
  const [cheese, chicken, pepperoni] = recommendationsList.data

  const dayRecommendation = () => {
    const date = new Date() 
    const today = date.getDay().toString()
    
    if(!today) {
      return null
    }

    if(today === "0" || today === "2") {
      return cheese
    }

    if(today === "1" || today === "3") {
      return chicken
    }

    if(today === "4" || today === "5" || today === "6") {
      return pepperoni
    }
  }

  res.json({recommendation: dayRecommendation()})
}