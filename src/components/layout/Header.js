import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../assets/logo.svg'
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    menuButton: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(0)
    },
    title: {
        fontSize: '2rem',
        fontWeight: 'bold'
        // flexGrow: 1,
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static"
                style={{
                    backgroundColor: '#0a7a95',
                    alignItems: 'center',
                    position: 'relative'
                }}>
            <Toolbar style={{width: '80%'}}>
                <IconButton edge="start" className={classes.menuButton} size="medium" color="inherit" aria-label="menu">
                    <NavLink style={{all: "unset"}} to="/"><img style={{height: 50}} src={logo} alt="logo"/></NavLink>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <NavLink style={{all: "unset"}} to="/">DISCOVERY SEMESTER</NavLink>
                </Typography>

                <div style={{marginLeft: 'auto', marginRight: 0}}>
                    <Button color="inherit"><NavLink style={{all: "unset"}} to="/mentees">Mentees</NavLink></Button>
                    <Button color="inherit"><NavLink style={{all: "unset"}} to="/mentors">Mentors</NavLink></Button>
                    <Button color="inherit"><NavLink style={{all: "unset"}} to="/news">News</NavLink></Button>
                    <Button color="inherit"><NavLink style={{all: "unset"}} to="/about">About</NavLink></Button>
                </div>
                <div style={{fontWeight: 'bold', marginLeft: '1rem'}}>
                    <div>en</div>
                    <div>de</div>
                </div>

            </Toolbar>
        </AppBar>
    );
};

export default Header;