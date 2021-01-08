import React, { Suspense } from 'react'

import Titles from '../../parts/Titles';
import Cards from '../../parts/Cards';
import NavButtons from '../../parts/NavButtons';

import useFillings from '../../hooks/useFillings';

export default function Fillings({
  step,
  prevStep,
  nextStep,
  selectedFilling,
  handleSelectedFilling
}) {
  const fillings = useFillings()

  if (step !== 4) {
    return null
  }
  return (
    <>
      <Suspense fallback={<p>Loading data...</p>}>
        <Titles componentName="Fillings" />
        <Cards
          handleSelectedOption={handleSelectedFilling}
          pizzaOptions={fillings}
          selectedOption={selectedFilling}
        />
        <NavButtons
          step={step}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      </Suspense>
    </>
  );
}
