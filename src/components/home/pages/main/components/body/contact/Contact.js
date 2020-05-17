import React, { Component } from 'react';

import Cover from './components/Cover';
import ContactForm from './components/ContactForm';

class Partners extends Component {
  render () {
    return (
      <React.Fragment>
        <Cover />
        <ContactForm />
      </React.Fragment>
    );
  }
};

export default Partners;
