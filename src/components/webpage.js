import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

// Components
import { Container } from 'react-bootstrap';
import Log from '../Log';

import MaintenancePage from './maintenance/maintenance';
import NotFoundPage from './notfound/index';
import HomePage from './main/index';
import HomePage2019 from './2019/index';
import NUSBiathlon from './main/nusbiathlon/index';
import RunNUS from './main/runnus/index';
import SunNUS from './main/sunnus/index';
import InterFacultyGames from './main/ifg/index';

class WebPage extends Component {
  render(){
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
          <Route path='/nusbiathlon' exact component={NUSBiathlon} />
          <Route path='/runnus' exact component={RunNUS} />
          <Route path='/sunnus' exact component={SunNUS} />
          <Route path='/ifg' exact component={InterFacultyGames} />
          <Route path='/2019/:page' component={HomePage2019} />
          <Route path='/' exact component={HomePage} />
          <Route component={NotFoundPage} />
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

export default WebPage;
