import { useState, useEffect } from 'react'
import api from '../services/api'

export default function useRecommendation() {
  const [recommendation, setRecommendation] = useState([])

  useEffect(() => {
    const fetchRecommendation = async () => {
      const recommendationMeta = await api.get('/recommendation')
      const recommendationData = recommendationMeta.data.recommendation
      setRecommendation(recommendationData)
    }
    fetchRecommendation()
  }, [])

  return recommendation
}
