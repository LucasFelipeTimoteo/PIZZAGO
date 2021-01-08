import React, { Suspense } from 'react'

import Titles from '../../parts/Titles';
import Cards from '../../parts/Cards';
import NavButtons from '../../parts/NavButtons';

import useSizes from '../../hooks/useSizes';

export default function Sizes({ step, prevStep, nextStep, selectedSize, handleSelectedSize }) {
  const sizes = useSizes()

  if (step !== 3) {
    return null
  }
  return (
    <>
      <Suspense fallback={<p>Loading data...</p>}>
        <Titles componentName="Sizes" />
        <Cards
          pizzaOptions={sizes}
          handleSelectedOption={handleSelectedSize}
          selectedOption={selectedSize}
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
