import { useState, useEffect } from 'react'
import api from '../services/api'

export default function useRecommendation() {
  const [recommendation, setRecommendation] = useState([])

  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const recommendationMeta = await api.get('/recommendation')
        const recommendationData = recommendationMeta.data.recommendation
        setRecommendation(recommendationData)
      }
      catch (error) {
        throw new Error(error)
      }
    }
    
    fetchRecommendation()
  }, [])

  return recommendation
}
