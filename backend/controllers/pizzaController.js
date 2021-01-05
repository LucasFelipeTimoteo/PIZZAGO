const api = require('../services/api')

module.exports.getDoughs = async ({ res }) => {
  try {
    const doughsMeta = await api.get('/doughs')
    const doughsData = doughsMeta.data

    const thinDough = doughsData.thin
    const traditionalDough = doughsData.traditional
    const thickDough = doughsData.thick

    const doughs = [
      thinDough,
      traditionalDough,
      thickDough
    ]

    res.json(doughs)
  }
  catch (error) {
    throw new Error(error)
  }
}

module.exports.getSizes = async ({ res }) => {
  try {
    const sizesMeta = await api.get('/sizes')
    const sizesData = sizesMeta.data

    const smallSize = sizesData.small
    const mediumSize = sizesData.medium
    const largeSize = sizesData.large

    const sizes = [
      smallSize,
      mediumSize,
      largeSize
    ]

    res.json(sizes)
  }
  catch (error) {
    throw new Error(error)
  }
}

module.exports.getFillings = async ({ res }) => {
  try {
    const fillingsMeta = await api.get('/fillings')
    const fillingsData = fillingsMeta.data

    const cheese = fillingsData.cheese
    const chicken = fillingsData.chicken
    const pepperoni = fillingsData.pepperoni

    const fillings = [
      cheese,
      chicken,
      pepperoni
    ]

    res.json(fillings)
  }
  catch (error) {
    throw new Error(error)
  }
}