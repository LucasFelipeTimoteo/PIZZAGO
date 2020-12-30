import React from 'react'
import { Dialog, Typography } from '@material-ui/core'

import NavButtons from '../NavButtons'
import useModalBoxStyles from '../../styles/components/confirmModalBox'

export default function ConfirmModalBox({ isOpenModalBox, isRecommendation }) {
  const modalBoxClasses = useModalBoxStyles()

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
                você recebeu +10 pontos de benefícios
              </Typography>
            </>
          }
          <NavButtons modalBox />
        </div>
      </Dialog>
    </>
  )
}
