import React from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core";
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import Mentees from '../pages/Mentees';
import Mentors from '../pages/Mentors';
import News from '../pages/News';
import About from '../pages/About';

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
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/mentees" component={Mentees}/>
                    <Route exact path="/mentors" component={Mentors}/>
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/about" component={About}/>
                    <Redirect to="/"/>
                </Switch>
        </Container>
    );
};

export default Main;