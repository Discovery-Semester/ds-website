import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React,{ ReactNode }  from 'react';
import { Link } from 'react-router-dom';

type Props = {
    children: ReactNode,
    to: string,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
        border: "2px solid " + theme.color.red500,
        padding: "6px 9px 6px 10px",
        fontWeight: 600,
        backgroundColor: "white",
        color: "black",
        cursor: "pointer",
        boxShadow: "3px 3px " + theme.color.red500,
        fontSize: "1.25rem",
    },
  }
));

export default function DiscoveryButton(props: Props) {
    const classes = useStyles();
    return (
        <Link to={props.to}>
            <button className={classes.button}>{props.children}</button>
        </Link>
    );
}