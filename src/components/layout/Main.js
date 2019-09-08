import React from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core";
import {Redirect, Route, Switch} from 'react-router-dom';
import PageContent from '../pages/PageContent';
import constants from "../../common/constants";

const useStyles = makeStyles(theme => ({
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    }
}));

const Main = () => {
    const classes = useStyles();
    return (
        <Container component="main" className={classes.main} maxWidth="sm">
                <Switch>
                    <Route exact path={constants.routes} component={PageContent}/>
                    <Redirect to="/"/>
                </Switch>
        </Container>
    );
};

export default Main;