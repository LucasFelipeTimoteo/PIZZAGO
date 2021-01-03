import React from 'react'
import { Dialog, Typography } from '@material-ui/core'

import useModalBoxStyles from '../../styles/components/confirmModalBox'
import usePoints from '../../hooks/usePoints'

import NavButtons from '../../components/NavButtons'

export default function ConfirmModalBox({ isOpenModalBox, isRecommendation }) {
  const modalBoxClasses = useModalBoxStyles()
  const pointsMessage = usePoints()

  return (
    <>
      <Dialog
        open={isOpenModalBox}
      >
        <div className={modalBoxClasses.modalBoxContainer}>
          <Typography
            variant="h3"
            component="h2"
            className={modalBoxClasses.modalBoxTitle}
          >
            Sucesso!
          </Typography>
          <Typography variant="body1" component="p">
            seu pedido foi realizado
          </Typography>

          {
            isRecommendation &&
            <>
              <Typography variant="h5" component="h3">
                Parabéns
              </Typography>
              <Typography variant="body1" component="p">
                { pointsMessage }
              </Typography>
            </>
          }
          <NavButtons modalBox />
        </div>
      </Dialog>
    </>
  )
}
