import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './body/Home';
import About from './body/About';
import Clubs from './body/Clubs';
import Committee from './body/Committee';
import Events from './body/Events';
import Partners from './body/Partners';
import Projects from './body/Projects';
import NotFound from './body/NotFound';

class MainBody extends Component {
  render () {
    return (
      <div className='content'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/clubs' component={Clubs} />
          <Route exact path='/committee' component={Committee} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/partners' component={Partners} />
          <Route exact path='/projects' component={Projects} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
};

export default MainBody;
