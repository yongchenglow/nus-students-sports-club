import React, { Component } from 'react';

import Logo from './Sports_Club_Logo_Red_Grey.png';

class SportsClubLogo extends Component {
  render () {
    return (
      <React.Fragment>
        <img src={Logo} className={this.props.className} style={this.props.style}/>
      </React.Fragment>
    );
  }
};

export default SportsClubLogo;
