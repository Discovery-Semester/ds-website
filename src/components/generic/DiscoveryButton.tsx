import React, { ReactFragment, ReactNode } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
  to?: string;
  nav?: boolean;
  onClick?: () => void;
  active?: boolean;
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
    activeButton: {
      border: "2px solid " + theme.color.red500,
      padding: "6px 9px 6px 10px",
      fontWeight: 600,
      backgroundColor: theme.color.red500,
      color: "white",
      fontSize: "1.25rem",
    },
  })
);

export default function DiscoveryButton(props: Props) {
  const classes = useStyles();

  return props.to ? (
    props.nav ? (
      <Link to={props.to}>
        <button
          className={props.active ? classes.activeButton : classes.button}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      </Link>
    ) : (
      <a href={props.to} target="_blank">
        <button
          className={props.active ? classes.activeButton : classes.button}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      </a>
    )
  ) : (
    <button
      className={props.active ? classes.activeButton : classes.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
