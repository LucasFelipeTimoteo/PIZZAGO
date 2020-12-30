import './styles/global/App.css';

import MuiTheme from './styles/theme/MuiTheme';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

import Routes from './Routes';

function App() {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <CssBaseline />
      <div className="App">
        <Routes />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
