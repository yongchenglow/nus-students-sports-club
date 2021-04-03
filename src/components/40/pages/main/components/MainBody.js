import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './body/home/Home';
import About from './body/about/About';
import MemberClubs from './body/memberClubs/MemberClubs';
import ClubPage from './body/memberClubs/clubPage/ClubPage';
import Committee from './body/committee/Committee';
import Events from './body/events/Events';
import Partners from './body/partners/Partners';
import SCProjects from './body/scProjects/SCProjects';
import NotFound from './body/NotFound';

class MainBody extends Component {
  render () {
    return (
      <div className='content'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/clubs' component={MemberClubs} />
          <Route path='/clubs/:clubName' component={ClubPage} />
          <Route exact path='/committee' component={Committee} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/partners' component={Partners} />
          <Route exact path='/projects' component={SCProjects} />
          <Route path='/notfound' component={NotFound} />
        </Switch>
      </div>
    );
  }
};

export default MainBody;
