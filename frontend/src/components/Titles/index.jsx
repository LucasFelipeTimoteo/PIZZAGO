import { Typography } from '@material-ui/core'
import React from 'react'
import useTitleStyles from '../../styles/components/titlles';

export default function Titles({ componentName }) {
  const titleClasses = useTitleStyles()

  return (
    <Typography variant="h3" component="h2" className={titleClasses.title}>
      { componentName === 'Options' && 'Opções' }
      { componentName === 'Recommendation' && 'Recomendação' }
      { componentName === 'Doughs' && 'Massas' }
      { componentName === 'Sizes' && 'Tamanhos' }
      { componentName === 'Fillings' && 'Recheios' }
      { componentName === "Confirm" && 'Confirmar pedido' }
    </Typography>
  )
}
