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

import useOptions from '../../hooks/useOptions';
import useCardStyles from '../../styles/components/contentCard';
import useTitleStyles from '../../styles/components/titlles';
import NavButtons from '../NavButtons';

export default function Options({ step, nextStep, recommendationStep }) {
  const cardClasses = useCardStyles()
  const titleClasses = useTitleStyles()
  const options = useOptions()

  const handleCardClick = (name) => {
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
        <Typography variant="h3" component="h2" className={titleClasses.title}>
          opções
        </Typography>
        <Grid container className={cardClasses.cardGroup} justify="center">

          {
            options.map((option, index) => (
              <Grid item
                key={option.name || index}
                onClick={ () => handleCardClick(option.name) }
              >
                <Card className={cardClasses.card}>
                  <CardActionArea>
                    <CardMedia
                      className={cardClasses.cardMedia}
                      image={option.image || sampleImage}
                      title={`massa ${option.name}`}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {option.name || cardAltName}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {option.description || cardAltDescription}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          }

        </Grid>
        <NavButtons step={step} />
      </Suspense>
    </>
  );
}
