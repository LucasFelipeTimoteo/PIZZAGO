import React, { useEffect, useState } from 'react'

import sampleImage from '../../assets/images/sample-bg.jpg'
import {
  cardAltDescription,
  cardAltName,
  confirmCardAltName,
  confirmCardAltDescription
} from '../../alternativeTexts/altTexts'

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@material-ui/core';

import useCardStyles from '../../styles/components/contentCard';

export default function Cards({
  handleSelectedOption,
  handleOptionsOfOptionsComponent,
  pizzaOptions,
  selectedOption,
  type
}) {
  const cardClasses = useCardStyles()

  const altName = () => {
    if (type === 'confirm') {
      return confirmCardAltName
    }

    if (type === 'option') {
      return cardAltName
    }
  }

  const altDescription = () => {
    if (type === 'confirm') {
      return confirmCardAltDescription
    }

    if (type === 'option') {
      return cardAltDescription
    }
  }

  const [isCardSelected, setIsCardSelected] = useState(false)
  useEffect(() => {
    const selectCard = () => {
      if (selectedOption && pizzaOptions) {
        let selectedOptionValues = Object.entries(selectedOption)

        let selected = pizzaOptions.find(option => {
          let optionValues = Object.entries(option)
          return JSON.stringify(optionValues) === JSON.stringify(selectedOptionValues)
        })

        setIsCardSelected(selected)
      }
    }
    selectCard()
  }, [selectedOption, pizzaOptions])

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
            <Card className={`${cardClasses.card} ${pizzaOption === isCardSelected && cardClasses.cardSelected}`}>
              <CardActionArea>
                <CardMedia
                  className={cardClasses.cardMedia}
                  image={pizzaOption.image || sampleImage}
                  title={`massa ${pizzaOption.name}` || altName()}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {pizzaOption.name || altName()}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {pizzaOption.description || altDescription()}
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
