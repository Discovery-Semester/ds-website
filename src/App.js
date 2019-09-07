import React from 'react';
import './App.css';
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        flexGrow: 1
    }
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
