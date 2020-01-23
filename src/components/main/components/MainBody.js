import React from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Clubs from './pages/Clubs';
import Committee from './pages/Committee';
import Events from './pages/Events';
import Partners from './pages/Partners';
import Projects from './pages/Projects';
import NotFound from '../notfound/NotFound';

class MainBody extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/clubs' component={Clubs} />
          <Route exact path='/committee' component={Commmittee} />
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
