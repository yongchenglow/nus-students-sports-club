import React, { Component } from "react";

import Cover from "./components/Cover";
import Indoors from "./components/Indoors";
import Land from "./components/Land";
import Water from "./components/Water";
import MartialArts from "./components/MartialArts";

class MemberClubs extends Component {
  render() {
    return (
      <React.Fragment>
        <Cover />
        <Land />
        <Indoors />
        <Water />
        <MartialArts />
      </React.Fragment>
    );
  }
}

export default MemberClubs;
