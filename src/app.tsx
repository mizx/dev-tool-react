import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import NavBar from './nav-bar';
import BitList from './bit-list';

const App: React.SFC = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <>
        <NavBar />
        <BitList />
      </>
    </CssBaseline>
  </MuiThemeProvider>
);

export default App;
