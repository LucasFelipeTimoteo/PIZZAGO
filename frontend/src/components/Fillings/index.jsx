import React, { Suspense } from 'react'

import Titles from '../../parts/Titles';
import Cards from '../../parts/Cards';
import NavButtons from '../../parts/NavButtons';

import useFillings from '../../hooks/useFillings';

export default function Fillings({ step, prevStep, nextStep, handleSelectedFilling }) {
  const fillings = useFillings()

  if (step !== 4) {
    return null
  }
  return (
    <>
      <Suspense fallback={<p>Loading data...</p>}> 
        <Titles componentName="Fillings" />
        <Cards pizzaOptions={fillings} handleSelectedOption={handleSelectedFilling} />
        <NavButtons step={step} prevStep={prevStep} nextStep={nextStep} />
      </Suspense>
    </>
  );
}
