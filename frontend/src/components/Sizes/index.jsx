import React, { Suspense } from 'react'

import Titles from '../../parts/Titles';
import Cards from '../../parts/Cards';
import NavButtons from '../NavButtons';

import useSizes from '../../hooks/useSizes';

export default function Sizes({ step, prevStep, nextStep, handleSelectedSize }) {
  const sizes = useSizes()

  if (step !== 3) {
    return null
  }
  return (
    <>
      <Suspense fallback={<p>Loading data...</p>}>
        <Titles componentName="Sizes" />
        <Cards pizzaOptions={sizes} handleSelectedOption={handleSelectedSize} />
        <NavButtons step={step} prevStep={prevStep} nextStep={nextStep} />
      </Suspense>
    </>
  );
}
