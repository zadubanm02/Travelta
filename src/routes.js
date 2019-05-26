import React from "react";
import { Switch, Route } from "react-router";
import Page from "./Page.jsx";
import BlogPage from "./BlogPage";
import PrispevkyPage from "./PrispevkyPage";

export default (
  <Switch>
    <Route exact={true} path="/" component={Page} />
    <Route path="/blog" component={BlogPage} />
    <Route path="/prispevky" component={PrispevkyPage} />
  </Switch>
);

//<Route exact={true} path="/" component={Page} />
