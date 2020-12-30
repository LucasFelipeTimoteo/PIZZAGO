import { useState, useEffect } from 'react'
import api from '../services/api'

export default function useOptions() {
  const [options, setOptions] = useState([])

  useEffect(() => {
    const fetchOptions = async () => {
      const optionsMeta = await api.get('/options')
      const optionsData = optionsMeta.data
      setOptions(optionsData)
    }
    fetchOptions()
  }, [])

  return options
}
