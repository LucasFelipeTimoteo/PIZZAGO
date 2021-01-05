import { useEffect, useState } from 'react'
import api from '../services/api'

export default function usePoints() {
  const [pointsMessage, setPointsMessage] = useState("")

  useEffect(() => {
    const fetchPointsMessage = async () => {
      try {
        const pointsMessageMeta = await api.get('/points')
        const pointsMessageData = pointsMessageMeta.data
        setPointsMessage(pointsMessageData)
      }
      catch (error) {
        throw new Error(error)
      }
    }
    
    fetchPointsMessage()
  }, [])

  return pointsMessage
}
