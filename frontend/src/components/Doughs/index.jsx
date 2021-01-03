import React, { Suspense } from 'react'

import Titles from '../../parts/Titles';
import Cards from '../Cards';
import NavButtons from '../NavButtons'

import useDoughs from '../../hooks/useDoughs';

export default function Doughs({ step, prevStep, nextStep, handleSelectedDough }) {
  const doughs = useDoughs()

  if (step !== 2) {
    return null
  }
  return (
    <>
      <Suspense fallback={<p>Loading data...</p>}>
        <Titles componentName="Doughs" />
        <Cards handleSelectedOption={handleSelectedDough} pizzaOptions={doughs} />
        <NavButtons step={step} prevStep={prevStep} nextStep={nextStep} />
      </Suspense>
    </>
  );
}
