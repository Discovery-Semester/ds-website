import React, { ReactFragment, ReactNode } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { NavLink } from "react-router-dom";

type Props = {
  children: ReactNode;
  to?: string;
  nav?: boolean;
  onClick?: () => void;
  focus?: boolean;
  disabled?: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      border: "2px solid " + theme.color.red500,
      padding: "6px 9px 6px 10px",
      fontWeight: 600,
      backgroundColor: "white",
      boxShadow: "3px 3px " + theme.color.red500,
      color: "black",
      cursor: "pointer",
      fontSize: "1.25rem",
      transition: "box-shadow 0.3s ease-in-out",
      "&:hover": {
        color: "white",
        backgroundColor: theme.color.red500,
        boxShadow: "0 0" + theme.color.red500,
      },
    },
    focusButton: {
      border: "2px solid " + theme.color.red500,
      padding: "6px 9px 6px 10px",
      fontWeight: 600,
      backgroundColor: theme.color.red500,
      color: "white",
      fontSize: "1.25rem",
    },
    inactiveButton: {
      border: "2px solid " + theme.color.grey500,
      padding: "6px 9px 6px 10px",
      backgroundColor: theme.color.grey300,
      color: "grey",
      fontSize: "1.25rem",
      fontStyle: "italic",
    },
  })
);

export default function DiscoveryButton(props: Props) {
  const classes = useStyles();

  return props.disabled ? (
    <button disabled className={classes.inactiveButton}>
      {props.children}
    </button>
  ) : props.to ? (
    props.nav ? (
      <NavLink to={props.to}>
        <button
          className={props.focus ? classes.focusButton : classes.button}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      </NavLink>
    ) : (
      <a href={props.to} target="_blank">
        <button
          className={props.focus ? classes.focusButton : classes.button}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      </a>
    )
  ) : (
    <button
      className={props.focus ? classes.focusButton : classes.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
