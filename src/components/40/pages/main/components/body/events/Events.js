import React, { Component } from 'react';

import Cover from './components/Cover';
import Event from './components/Event';

class Events extends Component {
  render () {
    return (
      <React.Fragment>
        <Cover />
        <Event />
      </React.Fragment>
    );
  }
};

export default Events;
