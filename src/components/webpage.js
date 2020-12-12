import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

// Components
import Log from '../Log';

import Maintenance from './maintenance/Maintenance';
import HomeRouter from './home/HomeRouter';
import HomeRouter39 from './39/HomeRouter39';

class WebPage extends Component {
  render(){
    let webpage = null;

    // if(process.env.REACT_APP_IS_MAINTENANCE === 'true'){
    //   Log.info('Page is on Maintenance');
    //   webpage = (
    //     <Switch>
    //       <Route path='/' exact component={Maintenance} />
    //     </Switch>
    //   );
    // } else {
      webpage = (
        <Switch>
          <Route path='/39/' component={HomeRouter39} />
          <Route path='/' component={HomeRouter} />
        </Switch>
      );
    // }

    return (
      <React.Fragment>
        {webpage}
      </React.Fragment>
    );
  }
}

export default WebPage;
