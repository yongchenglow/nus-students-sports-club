import React, { Component } from "react";
import { Helmet } from "react-helmet";

class MainHeader extends Component {
  render() {
    return (
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    );
  }
}

export default MainHeader;
