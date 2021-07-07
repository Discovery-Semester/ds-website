import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
  to: string;
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
        boxShadow: "0 0"+ theme.color.red500,
      },
    },
  })
);

export default function DiscoveryButton(props: Props) {
  const classes = useStyles();
  return (
    <Link to={props.to}>
      <button className={classes.button}>{props.children}</button>
    </Link>
  );
}
