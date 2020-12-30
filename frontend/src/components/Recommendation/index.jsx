import React, { Suspense, useState } from 'react'
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

import useRecommendation from '../../hooks/useRecommendation';
import useCardStyles from '../../styles/components/contentCard';
import useTitleStyles from '../../styles/components/titlles';
import ConfirmModalBox from '../ConfirmModalBox';

export default function Recommendation({ step }) {
  const [isOpenModalBox, setIsOpenModalBox] = useState(false)

  const cardClasses = useCardStyles()
  const titleClasses = useTitleStyles()
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
        <Typography variant="h3" component="h2" className={titleClasses.title}>
          recomendação
        </Typography>
        <Grid container className={cardClasses.cardGroup} justify="center">

          {
            recommendation.map((dayRecommendation, index) => (
              <Grid item key={dayRecommendation.name || index}>
                <Card className={cardClasses.card}>
                  <CardActionArea disabled>
                    <CardMedia
                      className={cardClasses.cardMedia}
                      image={dayRecommendation.image || sampleImage}
                      title={`massa ${dayRecommendation.name}`}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {dayRecommendation.name || cardAltName}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {dayRecommendation.description || cardAltDescription}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          }

        </Grid>
        <NavButtons step={step} handleConfirmation={handleConfirmation} />
        <ConfirmModalBox isOpenModalBox={isOpenModalBox} isRecommendation />
      </Suspense>
    </>
  );
}
