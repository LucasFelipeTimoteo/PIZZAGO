import { useState, useEffect } from 'react'
import api from '../services/api'

export default function useDoughs() {
  const [doughs, setDoughs] = useState([])

  useEffect(() => {
    const fetchDoughs = async () => {
      const doughsMeta = await api.get('/doughs')
      const doughsData = doughsMeta.data
      setDoughs(doughsData)
    }
    fetchDoughs()
  }, [])

  return doughs
}
