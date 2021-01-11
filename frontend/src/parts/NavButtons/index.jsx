import React from 'react'
import { Link } from 'react-router-dom'

import {
  Container,
  IconButton,
  Typography
} from '@material-ui/core'

import {
  Home as HomeIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  Check as CheckIcon
} from '@material-ui/icons'

import useNavButtonsStyles from '../../styles/parts/navButtons'

export default function NavButtons({
  step,
  prevStep,
  nextStep,
  modalBox,
  isNextStepDisabled,
  isConfirmationButtonDisabled,
  handleConfirmation
}) {
  const classes = useNavButtonsStyles()

  if (step === 'recommendationStep') {
    return (
      <div className={classes.buttonsContainer}>
        <Link to="/" className={classes.button}>
          <IconButton>
            <HomeIcon fontSize="large" />
          </IconButton>
        </Link>

        <IconButton
          disabled={isNextStepDisabled}
          className={classes.button}
          onClick={handleConfirmation}
        >
          <CheckIcon fontSize="large" />
        </IconButton>

        <Container className={classes.helperTextContainer}>
          <Typography variant="caption" className={classes.helperTextPoints}>
            Se confirmar esse pedido, você receberá pontos de benefícios!
          </Typography>
        </Container>
      </div>
    );
  }

  if (step === 1 || modalBox) {
    return (
      <div className={classes.buttonsContainer}>
        <Link to="/" className={classes.button}>
          <IconButton>
            <HomeIcon fontSize="large" />
          </IconButton>
        </Link>
      </div>
    );
  }

  if (step === 2 || step === 3 || step === 4) {
    return (
      <div className={classes.buttonsContainer}>
        <IconButton
          onClick={prevStep}
          className={classes.button}
        >
          <ArrowBackIcon fontSize="large" />
        </IconButton>

        <IconButton
          onClick={nextStep}
          disabled={isNextStepDisabled}
          className={classes.button}
        >
          <ArrowForwardIcon fontSize="large" />
        </IconButton>

        <Container className={classes.helperTextContainer}>
          <Typography variant="caption" className={classes.helperText}>
            Está indeciso(a)? Sinta-se livre para explorar as demais opções
          </Typography>
        </Container>
      </div>
    );
  }

  if (step === 5) {
    return (
      <div className={classes.buttonsContainer}>
        <IconButton onClick={prevStep} className={classes.button}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>

        <IconButton
          onClick={handleConfirmation}
          className={classes.button}
          disabled={isConfirmationButtonDisabled}
        >
          <CheckIcon fontSize="large" />
        </IconButton>
      </div>
    );
  }
}
