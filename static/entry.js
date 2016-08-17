import React from "react";
import ReactDom from "react-dom";
import {Router, Route} from "react-router";
import App from "/pagelet/app/app";

ReactDom.render((
  <Router>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.getElementById("content"));