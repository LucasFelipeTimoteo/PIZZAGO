import { useState, useEffect } from 'react'
import api from '../services/api'

export default function useSizes() {
  const [sizes, setSizes] = useState([])

  useEffect(() => {
    const fetchSizes = async () => {
      const sizesMeta = await api.get('/sizes')
      const sizesData = sizesMeta.data
      setSizes(sizesData)
    }
    fetchSizes()
  }, [])

  return sizes
}
