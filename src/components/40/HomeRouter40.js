import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Main40 from "./pages/main/Main40";

class HomePage40 extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/40/" component={Main40} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default HomePage40;
