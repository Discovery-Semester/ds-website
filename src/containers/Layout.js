import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Main from "../components/layout/Main";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        flexGrow: 1
    }
}));

const Layout = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};

export default Layout;