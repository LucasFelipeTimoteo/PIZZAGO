const express = require('express')
const cors = require('cors')

const PORT = require('./PORT')

const PizzaRoute = require('./routes/pizzaRoute')
const recommendationsRoute = require('./routes/recommendationRoute')

const app = express()

app.use(cors())

app.use(recommendationsRoute)
app.use(PizzaRoute)

app.listen(PORT, () => {
  console.log(
    `
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          SERVER RUNNING ON PORT ${PORT}
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    `
  )
})