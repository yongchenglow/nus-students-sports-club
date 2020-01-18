import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Redux Store
import { Provider } from 'react-redux';
import store from './store';

// CSS
import './App.css';

// Components
import { Container } from 'react-bootstrap';
import Log from './Log';

import MaintenancePage from './components/maintenance/maintenance.js';
import NotFoundPage from './components/notfound/index.js';
import HomePage from './components/main/index.js';
import HomePage2019 from './components/2019/index.js';
import NUSBiathlon from './components/main/nusbiathlon/index.js';
import RunNUS from './components/main/runnus/index.js';
import SunNUS from './components/main/sunnus/index.js';
import InterFacultyGames from './components/main/ifg/index.js';

// For Debugging
if (process.env.NODE_ENV !== 'production') {
  localStorage.setItem('debug', 'app:*');
}

class App extends Component {
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
          <Route path='/' exact component={HomePage} />
          <Route path='/nusbiathlon' exact component={NUSBiathlon} />
          <Route path='/runnus' exact component={RunNUS} />
          <Route path='/sunnus' exact component={SunNUS} />
          <Route path='/ifg' exact component={InterFacultyGames} />
          <Route path='/2019/:page' component={HomePage2019} />
          <Route component={NotFoundPage} />
        </Switch>
      );
    }

    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Container>
              {webpage}
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
