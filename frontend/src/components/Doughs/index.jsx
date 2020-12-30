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
} from '@material-ui/core';

import NavButtons from '../NavButtons'

import useDoughs from '../../hooks/useDoughs';
import useCardStyles from '../../styles/components/contentCard';
import useTitleStyles from '../../styles/components/titlles';

export default function Doughs({ step, prevStep, nextStep, handleSelectedDough }) {
  const cardClasses = useCardStyles()
  const titleClasses = useTitleStyles()
  const doughs = useDoughs()

  if (step !== 2) {
    return null
  }
  return (
    <>
      <Suspense fallback={<p>Loading data...</p>}>
        <Typography variant="h3" component="h2" className={titleClasses.title}>
          massas
        </Typography>
        <Grid container className={cardClasses.cardGroup} justify="center">

          {
            doughs.map((dough, index) => (
              <Grid item
                key={dough.name || index}
                onClick={ () => handleSelectedDough(dough) }
              >
                <Card className={cardClasses.card}>
                  <CardActionArea>
                    <CardMedia
                      className={cardClasses.cardMedia}
                      image={dough.image || sampleImage}
                      title={`massa ${dough.name}`}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {dough.name || cardAltName}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {dough.description || cardAltDescription}
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
