import { createMuiTheme } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: orange[900]
    },
    type: 'dark'
  }
})

export default MuiTheme

