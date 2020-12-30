import { useEffect, useState } from 'react'
import api from '../services/api'

export default function usePoints() {
  const [pointsMessage, setPointsMessage] = useState("")

  useEffect(() => {
    const fetchPointsMessage = async () => {
      const pointsMessageMeta = await api.get('/points')
      const pointsMessageData = pointsMessageMeta.data
      setPointsMessage(pointsMessageData)
    }
    fetchPointsMessage()
  }, [])

  return pointsMessage
}
