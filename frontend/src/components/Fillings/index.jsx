import React, { Suspense } from 'react'

import Titles from '../Titles';
import Cards from '../Cards';
import NavButtons from '../NavButtons';

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
