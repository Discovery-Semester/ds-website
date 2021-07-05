import React from "react";
import { makeStyles, createStyles, withTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { IApplicationState } from "../store/reducers/Store";
import { changeLanguage } from "../store/actions/languageActionCreator";
import { toggleSideDrawer } from "../store/actions/uiActionCreator";
import logo from "../assets/logo-with-text-negative.svg";
import constants from "../utils/constants";

const useStyles = makeStyles((theme) =>
  createStyles({
    list: {
      width: 300,
    },
    fullList: {
      width: "auto",
    },
    logoContainer: {
      width: "100%",
      backgroundColor: theme.color.blue500,
      cursor: "pointer",
    },
    logo: {
      width: 280,
      margin: 10,
    },
    languageButton: {
      marginLeft: 10,
    },
  })
);

interface ISideDrawerProps {
  translation: any;
  currentLanguage: string;
  sideDrawerOpen: boolean;
  onLanguageChange: typeof changeLanguage;
  onToggleSideDrawer: typeof toggleSideDrawer;
}

const SideDrawer: React.FC<ISideDrawerProps> = (props) => {
  const classes = useStyles();

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    props.onToggleSideDrawer(open);
  };

  return (
    <Drawer open={props.sideDrawerOpen} onClose={toggleDrawer(false)}>
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <div className={classes.logoContainer}>
          <NavLink style={{ all: "unset" }} to="/">
            <img className={classes.logo} src={logo} alt="logo" />
          </NavLink>
        </div>
        <Divider />
        <List>
          <Link style={{ all: "unset" }} to={"/news"}>
            <ListItem button key="news">
              <ListItemText primary={props.translation.tabs.news} />
            </ListItem>
          </Link>
          <Divider />
          <Link style={{ all: "unset" }} to={"/participate"}>
            <ListItem button key="participate">
              <ListItemText primary={props.translation.tabs.participate} />
            </ListItem>
          </Link>
          <Divider />
          <Link style={{ all: "unset" }} to={"/about"}>
            <ListItem button key="about">
              <ListItemText primary={props.translation.tabs.about} />
            </ListItem>
          </Link>
          <Divider />
          <ListItem button key="Language">
            <ListItemText primary={props.translation.language} />

            {[constants.languages.EN, constants.languages.DE].map(
              (text, index) => (
                <Button
                  onClick={() => props.onLanguageChange(text)}
                  className={classes.languageButton}
                  key={index}
                  color="inherit"
                  variant={
                    props.currentLanguage === text ? "contained" : "outlined"
                  }
                >
                  {text}
                </Button>
              )
            )}
          </ListItem>
          <Divider />
        </List>
      </div>
    </Drawer>
  );
};

const mapStateToProps = (store: IApplicationState) => {
  return {
    translation: store.languages.translation,
    currentLanguage: store.languages.currentLanguage,
    sideDrawerOpen: store.ui.sideDrawerOpen,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLanguageChange: (language: string) => dispatch(changeLanguage(language)),
    onToggleSideDrawer: (open: boolean) => dispatch(toggleSideDrawer(open)),
  };
};

withTheme(SideDrawer);
export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
