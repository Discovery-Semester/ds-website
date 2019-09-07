import React from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';

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
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        </Container>
    );
};

export default Main;