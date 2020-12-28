const api = require('../services/api')

module.exports.getDoughs = async ({ res }) => {
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

module.exports.getSizes = async ({ res }) => {
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

module.exports.getFillings = async ({ res }) => {
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