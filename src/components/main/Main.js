import React, { Component } from 'react';

import MainHeader from './MainHeader';
import MainNavbar from './MainNavbar';
import MainBody from './MainBody';
import MainFooter from './MainFooter';

class Main extends Component {
  render() {
    return(
      <MainHeader />
      <MainNavbar />
      <MainBody />
      <MainFooter />
    )
  }
}

export default Main;
