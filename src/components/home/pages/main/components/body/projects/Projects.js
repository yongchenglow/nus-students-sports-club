import React, { Component } from 'react';

import Cover from './components/Cover';
import Project from './components/Project';

class Projects extends Component {
  render () {
    return (
      <React.Fragment>
        <Cover />
        <Project />
      </React.Fragment>
    );
  }
};

export default Projects;
