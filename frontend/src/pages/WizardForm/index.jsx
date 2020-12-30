import React, { useState } from 'react'

import Options from '../../components/Options'
import Recommendation from '../../components/Recommendation'
import Doughs from '../../components/Doughs'
import Sizes from '../../components/Sizes'
import Fillings from '../../components/Fillings'
import Confirm from '../../components/Confirm'

export default function WizardForm() {
  const [selectedDough, setSelectedDough] = useState({})
  const [selectedSize, setSelectedSize] = useState({})
  const [selectedFilling, setSelectedFilling] = useState({})

  const [step, setStep] = useState(1)

  const handleSelectedDough = (newDough) => {
    setSelectedDough(newDough)
  }

  const handleSelectedSize = (newSize) => {
    setSelectedSize(newSize)
  }

  const handleSelectedFilling = (newFilling) => {
    setSelectedFilling(newFilling)
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const recommendationStep = () => {
    setStep('recommendationStep')
  }

  return (
    <>
      <Options
        step={step}
        nextStep={nextStep}
        recommendationStep={recommendationStep}
      />

      <Recommendation
        step={step}
      />

      <Doughs
        step={step}
        prevStep={prevStep}
        nextStep={nextStep}
        selectedDough={selectedDough}
        handleSelectedDough={handleSelectedDough}
      />

      <Sizes
        step={step}
        prevStep={prevStep}
        nextStep={nextStep}
        selectedSize={selectedSize}
        handleSelectedSize={handleSelectedSize}
      />

      <Fillings
        step={step}
        prevStep={prevStep}
        nextStep={nextStep}
        selectedFilling={selectedFilling}
        handleSelectedFilling={handleSelectedFilling}
      />

      <Confirm
        step={step}
        prevStep={prevStep}
        selectedDough={selectedDough}
        selectedSize={selectedSize}
        selectedFilling={selectedFilling}
      />
    </>
  )
}