import React from "react";
import {Helmet} from "react-helmet";

class Header extends Component {
  render () {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>NUS Students' Sports Club</title>
        <link rel="canonical" href="http://mysite.com/example" />

        <link rel="icon" href="img/logos/NUS_Biathlon_Swim_Run.png">
        <title>NUS Students' Sports Club</title>
        <meta name="author" content="NUS Students' Sports Club">
        <meta name="description" content="NUS Students' Sports Club is the leading platform in promoting community bonding through recreational sports in NUS.">
        <meta name="keywords" content="NUS Students' Sports Club, NUSSSC, NUS Sports, Sports, NUS Sports Club, National University of Singapore, NUS">

        <meta property="og:type" content="website">
        <meta property="og:url" content="https://www.nussportsclub.org/">
        <meta property="og:image" content="img/logos/Sports_Club_Logo.png">
        <meta property="og:title" content="NUS Students' Sports Club">
        <meta property="og:description" content="NUS Students' Sports Club is the leading platform in promoting community bonding through recreational sports in NUS.">
      </Helmet>
    );
  }
};
