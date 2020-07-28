import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import ElevationScroll from './ElevationScroll';

const Header = () => {
  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar>Arc Development</Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
