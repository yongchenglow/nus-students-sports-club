import React, { Component } from 'react';

import MainHeader from './mc/MainHeader';
import MainNavbar from './mc/MainNavbar';
import MainBody from './mc/MainBody';
import MainFooter from './mc/MainFooter';

class HomePage extends Component {
  render() {
    return(
      <MainHeader />
      <MainNavbar />
      <MainBody />
      <MainFooter />
    )
  }
}

export default HomePage;
