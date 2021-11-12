import React, { ReactNode }  from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

type Props = {
    children: ReactNode;
  };
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerText: {
        fontSize: 'clamp(1.25rem,7vw, 2.5rem)',
        fontWeight: 600,
        color: theme.color.red500,
    },
  }
));

export default function DiscoveryTextHeader(props: Props) {
    const classes = useStyles();
    return <div className={classes.headerText}>{props.children}</div>;
}