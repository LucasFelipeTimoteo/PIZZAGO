import { makeStyles } from "@material-ui/core";

const useModalBoxStyles = makeStyles({
  modalBoxContainer: {
    display: 'grid',
    height: 'clamp(370px, 90vw, 470px)',
    width: 'clamp(150px, 90vw, 450px)',
    placeItems: 'center',
  },

  modalBoxTitle: {
    marginTop: 40
  }
});

export default useModalBoxStyles