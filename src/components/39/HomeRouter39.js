import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

// Components
import Main39 from './main/Main39';

class HomePage39 extends Component {
  render(){
    return (
      <React.Fragment>
        <Switch>
          <Route path='/39/' component={Main39} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default HomePage39;
