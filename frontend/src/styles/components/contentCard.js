import { makeStyles } from "@material-ui/core";

const useCardStyles = makeStyles({
  cardGroup: {
    placeItems: 'center',
  },
  card: {
    maxWidth: 345,
    border: 'solid 1.4px #a0a0a082',
    margin: 20,

    '&:hover, &:focus-within': {
      border: 'solid 1.4px #fff'
    }
  },

  cardSelected: {
    border: 'solid 1.4px orange !important',

    '& h2.MuiTypography-root': {
      color: 'orange'
    }
  },

  cardMedia: {
    height: 200,
    minWidth: 312
  }
});

export default useCardStyles