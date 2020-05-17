import React, { Component } from 'react';

import Cover from './components/Cover';
import Items from './components/Items';

class Partners extends Component {
  render () {
    return (
      <React.Fragment>
        <Cover />
        <Items />
      </React.Fragment>
    );
  }
};

export default Partners;
