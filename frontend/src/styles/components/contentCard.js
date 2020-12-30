import { makeStyles } from "@material-ui/core";

const useCardStyles = makeStyles({
  cardGroup: {
    placeItems: 'center',
  },
  card: {
    maxWidth: 345,
    border: 'solid 1px #a0a0a082',
    margin: 20,

    '&:hover, &:focus-within': {
      border: 'solid 1px #fff'
    }
  },
  cardMedia: {
    height: 200,
    minWidth: 312
  }
});

export default useCardStyles