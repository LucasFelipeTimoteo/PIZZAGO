import { useState, useEffect } from 'react'
import api from '../services/api'

export default function useOptions() {
  const [options, setOptions] = useState([])

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const optionsMeta = await api.get('/options')
        const optionsData = optionsMeta.data
        setOptions(optionsData)
      }
      catch (error) {
        throw new Error(error)
      }
    }
    
    fetchOptions()
  }, [])

  return options
}
