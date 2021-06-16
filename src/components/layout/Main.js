import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";
import ParticipatePage from "../pages/ParticipatePage";
import AboutPage from "../pages/AboutPage";



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
