import React from 'react'
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

// import useDoughs from '../../hooks/useDoughs';
import useCardStyles from '../../styles/components/contentCard';

export default function Cards({ handleSelectedOption, pizzaOptions, handleOptionsOfOptionsComponent }) {
  const cardClasses = useCardStyles()

  return (
    <Grid container className={cardClasses.cardGroup} justify="center">

      {
        pizzaOptions.map((pizzaOption, index) => (
          <Grid item
            key={pizzaOption.name || index}
            onClick={() => {
              handleSelectedOption && handleSelectedOption(pizzaOption)
              handleOptionsOfOptionsComponent && handleOptionsOfOptionsComponent(pizzaOption.name) 
            }}
          >
            <Card className={cardClasses.card}>
              <CardActionArea>
                <CardMedia
                  className={cardClasses.cardMedia}
                  image={pizzaOption.image || sampleImage}
                  title={`massa ${pizzaOption.name}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {pizzaOption.name || cardAltName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {pizzaOption.description || cardAltDescription}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))
      }

    </Grid>
  )
}
