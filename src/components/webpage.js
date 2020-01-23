import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

// Components
import { Container } from 'react-bootstrap';
import Log from '../Log';

import Maintenance from './maintenance/Maintenance';
import Main from './main/Main';
import Main2019 from './2019/Main2019';
import NUSBiathlon from './main/nusbiathlon/NUSBiathlon';
import RunNUS from './main/runnus/RunNUS';
import SunNUS from './main/sunnus/SunNUS';
import InterFacultyGames from './main/ifg/InterFacultyGames';

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
          <Route path='/' component={HomePage} />
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
