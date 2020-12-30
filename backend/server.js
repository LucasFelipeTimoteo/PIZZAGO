const express = require('express')
const cors = require('cors')

const PORT = require('./PORT')

const optionsRoute = require('./routes/optionsRoute')
const pizzaRoute = require('./routes/pizzaRoute')
const recommendationsRoute = require('./routes/recommendationRoute')

const app = express()

app.use(cors())

app.use(optionsRoute)
app.use(recommendationsRoute)
app.use(pizzaRoute)

app.listen(PORT, () => {
  console.log(
    `
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          SERVER RUNNING ON PORT ${PORT}
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    `
  )
})