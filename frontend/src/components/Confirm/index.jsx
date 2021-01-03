import React, { Suspense, useMemo, useState } from 'react'

import Titles from '../../parts/Titles';
import Cards from '../../parts/Cards';
import NavButtons from '../../parts/NavButtons';
import ConfirmModalBox from '../../parts/ConfirmModalBox';

import useIsConfirmationButtonDisabled from '../../hooks/useIsConfirmationButtonDisabled';

export default function Confirm({ 
  step, 
  prevStep, 
  selectedDough, 
  selectedSize, 
  selectedFilling 
}) {
  const [isOpenModalBox, setIsOpenModalBox] = useState(false)

  const options = useMemo(() => (
    [selectedDough, selectedSize, selectedFilling]
  ), [selectedDough, selectedSize, selectedFilling])

  const isConfirmationButtonDisabled = useIsConfirmationButtonDisabled(options)

  const handleConfirmation = () => {
    setIsOpenModalBox(true)
  }

  if (step !== 5) {
    return null
  }

  return (
    <>
      <Suspense fallback={<p>Loading data...</p>}>
        <Titles componentName="Confirm" />
        <Cards pizzaOptions={options} type="confirm" />

        <NavButtons
          step={step}
          prevStep={prevStep}
          handleConfirmation={handleConfirmation}
          isConfirmationButtonDisabled={isConfirmationButtonDisabled}
        />

        <ConfirmModalBox isOpenModalBox={isOpenModalBox} />
      </Suspense>
    </>
  )
}