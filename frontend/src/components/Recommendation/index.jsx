import React, { Suspense, useState } from 'react'

import Titles from '../../parts/Titles';
import Cards from '../../parts/Cards';
import NavButtons from '../NavButtons'
import ConfirmModalBox from '../ConfirmModalBox';

import useRecommendation from '../../hooks/useRecommendation';

export default function Recommendation({ step }) {
  const [isOpenModalBox, setIsOpenModalBox] = useState(false)

  const recommendation = useRecommendation()

  const handleConfirmation = () => {
    setIsOpenModalBox(true)
  }

  if (step !== "recommendationStep") {
    return null
  }
  return (
    <>
      <Suspense fallback={<p>Loading data...</p>}>
        <Titles componentName="Recommendation" />
        <Cards pizzaOptions={recommendation} />
        <NavButtons step={step} handleConfirmation={handleConfirmation} />
        <ConfirmModalBox isOpenModalBox={isOpenModalBox} isRecommendation />
      </Suspense>
    </>
  );
}
