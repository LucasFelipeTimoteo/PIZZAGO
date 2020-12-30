import { useState, useEffect } from 'react'
import api from '../services/api'

export default function useFillings() {
  const [fillings, setFillings] = useState([])

  useEffect(() => {
    const fetchfillings = async () => {
      const fillingsMeta = await api.get('/fillings')
      const fillingsData = fillingsMeta.data
      setFillings(fillingsData)
    }
    fetchfillings()
  }, [])

  return fillings
}
