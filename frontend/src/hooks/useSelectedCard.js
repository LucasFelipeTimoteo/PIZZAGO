import { useEffect, useState } from 'react'

export default function useSelectedCard(pizzaOptions, selectedOption) {
  const [selectedCard, setSelectedCard] = useState({})

  useEffect(() => {
    const selectCard = () => {
      const selectedOptionValues = Object.entries(selectedOption)

      const selected = pizzaOptions.find(option => {
        const optionValues = Object.entries(option)
        return JSON.stringify(optionValues) === JSON.stringify(selectedOptionValues)
      })

      setSelectedCard(selected)
    }

    selectedOption && selectCard()
  }, [selectedOption, pizzaOptions, selectedCard])

  return selectedCard
}
