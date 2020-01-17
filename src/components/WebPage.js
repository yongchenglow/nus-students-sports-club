import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import Log from '../Log';

import MaintenancePage from './maintenance/maintenance.js';
import ErrorPage from './error/index.js';
import HomePage from './main/index.js';
import HomePage2019 from './2019/index.js';
import NUSBiathlon from './main/nusbiathlon/index.js';
import RunNUS from './main/runnus/index.js';
import SunNUS from './main/sunnus/index.js';
import InterFacultyGames from './main/ifg/index.js';

class WebPage extends Component {
  render() {
    let webpage = null;
    if(process.env.REACT_APP_IS_MAINTENANCE === 'true'){
      Log.info('Page is on Maintenance');
      webpage = (
        <Switch>
          <Route path='/' exact component={MaintenancePage} />
        </Switch>
      );
    } else {
      webpage = (
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/nusbiathlon' exact component={NUSBiathlon} />
          <Route path='/runnus' exact component={RunNUS} />
          <Route path='/sunnus' exact component={SunNUS} />
          <Route path='/ifg' exact component={InterFacultyGames} />
          <Route path='/2019/:page' component={HomePage2019} />
          <Route component={ErrorPage} />
        </Switch>
      );
    }

    return (
      <Container>
        {webpage}
      </Container>
    );
  }
}

export default connect()(WebPage);
