import React, { Suspense, useEffect, useMemo, useState } from 'react'
import { confirmCardAltName, confirmCardAltDescription } from '../../alternativeTexts/altTexts'
import sampleImage from '../../assets/images/sample-bg.jpg'

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@material-ui/core'

import NavButtons from '../NavButtons';

import useCardStyles from '../../styles/components/contentCard';
import useTitleStyles from '../../styles/components/titlles';
import ConfirmModalBox from '../ConfirmModalBox';


export default function Confirm({ step, prevStep, selectedDough, selectedSize, selectedFilling }) {
  const [isOpenModalBox, setIsOpenModalBox] = useState(false)
  
  const cardClasses = useCardStyles()
  const titleClasses = useTitleStyles()
  const [isConfirmationButtonDisabled, setIsConfirmationButtonDisabled] = useState(true)

  const options = useMemo(() => (
    [selectedDough, selectedSize, selectedFilling]
  ), [selectedDough, selectedSize, selectedFilling])

  useEffect(() => {
    const checkIfConfirmationButtonShouldBeDisabled = () => {
      const validator = options.map(option => (
        Object.keys(option).length === 0 ? 'disabled' : 'enabled'
      ))
      const isDisabled = validator.includes('disabled')

      setIsConfirmationButtonDisabled(isDisabled)
    }

    checkIfConfirmationButtonShouldBeDisabled()
  }, [options])

  const handleConfirmation = () => {
    setIsOpenModalBox(true)
  }

  if (step !== 5) {
    return null
  }

  return (
    <>
      <Suspense fallback={<p>Loading data...</p>}>
        <Typography variant="h3" component="h2" className={titleClasses.title}>
          Confirmar pedido
        </Typography>
        <Grid container className={cardClasses.cardGroup} justify="center">

          {
            options.map((option, index) => (
              <Grid item key={option.name || index}>
                <Card className={cardClasses.card}>
                  <CardActionArea disabled>
                    <CardMedia
                      className={cardClasses.cardMedia}
                      image={option.image || sampleImage}
                      title={`massa ${option.name}` || index}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {option.name || confirmCardAltName}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {option.description || confirmCardAltDescription}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          }

        </Grid>
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