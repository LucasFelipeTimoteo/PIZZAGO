import { makeStyles } from "@material-ui/core";

const useNavButtonsStyles = makeStyles({
  buttonsContainer: {
    marginTop: 'clamp(10px, 3vw, 40px)'
  },
  button: {
    margin: "0 15px",
  },
  helperTextContainer: {
    marginTop: 'clamp(9px, 2.6vw, 40px)'
  },
  helperText: {
    opacity: 0.4
  },
  helperTextPoints: {
    color: 'white'
  }

});

export default useNavButtonsStyles