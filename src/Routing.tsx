import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import NewsPage from "./components/pages/NewsPage";
import ParticipatePage from "./components/pages/ParticipatePage";
import AboutPage from "./components/pages/AboutPage";



const Main = () => {
  return (
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/news"} component={NewsPage} />
        <Route exact path={"/participate"} component={ParticipatePage} />
        <Route exact path={"/about"} component={AboutPage} />
        <Redirect to="/" />
      </Switch>
  );
};

export default Main;
