import { makeStyles } from "@material-ui/core";

const useModalBoxStyles = makeStyles({
  modalBoxContainer: {
    display: 'grid',
    placeItems: 'center',
    height: 'clamp(370px, 90vw, 470px)',
    width: 'clamp(150px, 90vw, 450px)',
    overflow: 'hidden',
    padding: 30
  },

  modalBoxTitle: {
    marginTop: 40
  }
});

export default useModalBoxStyles