const api = require('../services/api')

module.exports.getRecommendation = async ({ res }) => {
  try {
    const doughsMeta = await api.get('/doughs')
    const doughsData = doughsMeta.data

    const sizesMeta = await api.get('/sizes')
    const sizesData = sizesMeta.data

    const fillingsMeta = await api.get('/fillings')
    const fillingsData = fillingsMeta.data

    // pizza options
    const thinDough = doughsData.thin
    const traditionalDough = doughsData.traditional

    const mediumSize = sizesData.medium

    const cheese = fillingsData.cheese
    const chicken = fillingsData.chicken
    const pepperoni = fillingsData.pepperoni

    const dayRecommendation = () => {
      const date = new Date()
      const today = date.getDay().toString()

      if (today === "0" || today === "2") {
        const recommendation = [traditionalDough, mediumSize, pepperoni]
        return recommendation
      }

      if (today === "1" || today === "3") {
        const recommendation = [traditionalDough, mediumSize, cheese]
        return recommendation
      }

      if (today === "4" || today === "5" || today === "6") {
        const recommendation = [thinDough, mediumSize, chicken]
        return recommendation
      }
    }

    res.json({ recommendation: dayRecommendation() })
  }
  catch (error) {
    throw new Error(error)
  }
}