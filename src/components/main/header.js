import React from "react";
import {Helmet} from "react-helmet";

class Header extends Component {
  render () {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />


        <link rel="icon" href="img/logos/NUS_Biathlon_Swim_Run.png">
        <title>NUS Students' Sports Club</title>
        <meta name="author" content="NUS Biathlon | NUS Students' Sports Club">
        <meta name="description" content="NUS Biathlon is the most anticipated annual swim and run event to promote healthy lifestyle">
        <meta name="keywords" content="NUS Biathlon, NUS Aquathlon, Swim & Run, NUSSSC, NUS Students' Sports Club">


        <meta property="og:type" content="website">
        <meta property="og:url" content="https://nussportsclub.org/nusbiathlon">
        <meta property="og:image" content="img/logos/NUS_Biathlon_2020.png">
        <meta property="og:title" content="NUS Biathlon | NUS Students' Sports Club">
        <meta property="og:description" content="NUS Biathlon is the most anticipated annual swim and run event to promote healthy lifestyle">
      </Helmet>
    );
  }
};
