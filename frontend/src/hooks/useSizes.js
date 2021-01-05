import { useState, useEffect } from 'react'
import api from '../services/api'

export default function useSizes() {
  const [sizes, setSizes] = useState([])

  useEffect(() => {
    const fetchSizes = async () => {
      try {
        const sizesMeta = await api.get('/sizes')
        const sizesData = sizesMeta.data
        setSizes(sizesData)
      }
      catch (error) {
        throw new Error(error)
      }
    }

    fetchSizes()
  }, [])

  return sizes
}
