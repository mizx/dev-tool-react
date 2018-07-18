import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar: React.SFC = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="title">DevTool NavBar</Typography>
    </Toolbar>
  </AppBar>
);

export default NavBar;
