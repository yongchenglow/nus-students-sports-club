import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Main from "./pages/main/Main";
import NUSBiathlon from "./pages/nusbiathlon/NUSBiathlon";
import RunNUS from "./pages/runnus/RunNUS";
// import SunNUS from "./pages/sunnus/SunNUS";
// import InterFacultyGames from "./pages/ifg/InterFacultyGames";

class MainRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/nusbiathlon" exact component={NUSBiathlon} />
          <Route path="/runnus" exact component={RunNUS} />
          <Route
            path="/sunnus"
            exact
            component={() => {
              window.location.href = "https://www.sunnus.nussportsclub.org";
              return null;
            }}
          />
          <Route
            path="/ifg"
            exact
            component={() => {
              window.location.href = "https://www.ifg.nussportsclub.org";
              return null;
            }}
          />
          <Route path="/" component={Main} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default MainRouter;
