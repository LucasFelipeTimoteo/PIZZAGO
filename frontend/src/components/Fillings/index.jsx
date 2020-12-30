import React, { Suspense } from 'react'
import sampleImage from '../../assets/images/sample-bg.jpg'
import { cardAltDescription, cardAltName } from '../../alternativeTexts/altTexts'

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@material-ui/core'

import NavButtons from '../NavButtons';

import useFillings from '../../hooks/useFillings';
import useCardStyles from '../../styles/components/contentCard';
import useTitleStyles from '../../styles/components/titlles';

export default function Fillings({ step, prevStep, nextStep, handleSelectedFilling }) {
  const cardClasses = useCardStyles()
  const titleClasses = useTitleStyles()
  const fillings = useFillings()

  if (step !== 4) {
    return null
  }
  return (
    <>
      <Suspense fallback={<p>Loading data...</p>}>
        <Typography variant="h3" component="h2" className={titleClasses.title}>
          Recheios
        </Typography>
        <Grid container className={cardClasses.cardGroup} justify="center">

          {
            fillings.map((filling) => (
              <Grid
                item
                key={filling.name}
                onClick={() => { handleSelectedFilling(filling) }}
              >
                <Card className={cardClasses.card}>
                  <CardActionArea>
                    <CardMedia
                      className={cardClasses.cardMedia}
                      image={filling.image || sampleImage}
                      title={`recheio ${filling.name}`}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {filling.name || cardAltName}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {filling.description || cardAltDescription}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          }

        </Grid>
        <NavButtons step={step} prevStep={prevStep} nextStep={nextStep} />
      </Suspense>
    </>
  );
}
