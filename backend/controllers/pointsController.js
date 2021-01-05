const api = require("../services/api");

module.exports.getPoints = async ({ res }) => {
  try {
    const pointsMeta = await api.get('/points')
    const pointsData = pointsMeta.data

    const { message, number } = pointsData
    const newMessage = message.replace("[N°]", number)

    const pointsMessage = newMessage

    res.json(pointsMessage)
  }
  catch (error) {
    throw new Error(error)
  }
}