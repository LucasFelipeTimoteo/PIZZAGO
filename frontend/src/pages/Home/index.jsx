import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Container, Typography, useTheme } from '@material-ui/core'

import useHomeStyles from '../../styles/pages/home'

export default function Home() {
  const theme = useTheme()
  const classes = useHomeStyles(theme)

  return (
    <div className={classes.homeWrapper}>
      <Container
        maxWidth="md"
        className={classes.homeContainer}
      >
        <Typography
          variant="h1"
          className={classes.logo}
        >
          pizzago
      </Typography>

        <Typography className={classes.subtitle}>
          sua satisfação é o nosso tempero especial
      </Typography>

        <Link to="wizard-form" className={classes.linkToWizard}>
          <Button
            size="large"
            color="primary"
            variant="contained"
            disableElevation
            className={classes.startMountingPizzaButton}
          >
            montar pizza
          </Button>
        </Link>
      </Container>
    </div>
  )
}
