import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

let MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500]
    },
    type: 'dark'
  }
})

MuiTheme = responsiveFontSizes(MuiTheme);

export default MuiTheme