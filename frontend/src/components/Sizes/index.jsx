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

import useSizes from '../../hooks/useSizes';
import useCardStyles from '../../styles/components/contentCard';
import useTitleStyles from '../../styles/components/titlles';

export default function Sizes({ step, prevStep, nextStep, handleSelectedSize }) {
  const cardClasses = useCardStyles()
  const titleClasses = useTitleStyles()
  const sizes = useSizes()

  if (step !== 3) {
    return null
  }
  return (
    <>
      <Suspense fallback={<p>Loading data...</p>}>
        <Typography variant="h3" component="h2" className={titleClasses.title}>
          Tamanhos
        </Typography>
        <Grid container className={cardClasses.cardGroup} justify="center">

          {
            sizes.map((size) => (
              <Grid
                item
                key={size.name}
                onClick={() => handleSelectedSize(size)}
              >
                <Card className={cardClasses.card}>
                  <CardActionArea>
                    <CardMedia
                      className={cardClasses.cardMedia}
                      image={size.image || sampleImage}
                      title={`tamanho ${size.name}`}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {size.name || cardAltName}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {size.description || cardAltDescription}
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
