import React, { Suspense } from 'react'

import Titles from '../Titles';
import Cards from '../Cards';
import NavButtons from '../NavButtons';

import useOptions from '../../hooks/useOptions';

export default function Options({ step, nextStep, recommendationStep }) {
  const options = useOptions()

  const handleOptionsCardClick = (name) => {
    if(name === 'montar') {
      nextStep()
    }
    if(name === 'recomendada') {
      recommendationStep()
    }
  }

  if (step !== 1) {
    return null
  }
  return (
    <>
      <Suspense fallback={<p>Loading data...</p>}>
        <Titles componentName="Options" />
        <Cards pizzaOptions={options} handleOptionsOfOptionsComponent={handleOptionsCardClick} />
        <NavButtons step={step} />
      </Suspense>
    </>
  );
}
