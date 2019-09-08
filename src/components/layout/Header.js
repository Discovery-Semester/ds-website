import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../assets/logo.svg'
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {changeLanguage} from "../../store/actions/languageActionCreator";
import constants from "../../common/constants";


const useStyles = makeStyles(theme => ({
    menuButton: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(0)
    },
    title: {
        fontSize: '2rem',
        fontWeight: 'bold'
        // flexGrow: 1,
    },
    languageButtons: {
        cursor: 'pointer'
    },
    menuButtons: {
        all: 'unset',
        fontWeight: 'bold'
    }
}));

const Header = props => {
    const classes = useStyles();
    return (
        <AppBar position="static"
                style={{
                    backgroundColor: constants.styling.mainColor,
                    alignItems: 'center',
                    position: 'relative'
                }}>
            <Toolbar style={{width: '80%'}}>
                <IconButton edge="start" className={classes.menuButton} size="medium" color="inherit" aria-label="menu">
                    <NavLink style={{all: "unset"}} to="/">
                        <img style={{
                            height: 90,
                            marginTop: -20,
                            marginBottom: -10
                        }} src={logo} alt="logo"/>
                    </NavLink>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <NavLink style={{all: "unset"}} to="/">DISCOVERY SEMESTER</NavLink>
                </Typography>

                <div style={{marginLeft: 'auto', marginRight: 0}}>
                    <Button color="inherit">
                        <NavLink className={classes.menuButtons} to="/mentees">
                            {props.translation.mentees}
                        </NavLink>
                    </Button>

                    <Button color="inherit">
                        <NavLink className={classes.menuButtons} to="/mentors">
                            {props.translation.mentors}
                        </NavLink>
                    </Button>

                    <Button color="inherit">
                        <NavLink className={classes.menuButtons} to="/news">
                            {props.translation.news}
                        </NavLink>
                    </Button>

                    <Button color="inherit">
                        <NavLink className={classes.menuButtons} to="/about">
                            {props.translation.about}
                        </NavLink>
                    </Button>
                </div>
                <div style={{fontWeight: 'bold', marginLeft: '1rem'}}>
                    <div className={classes.languageButtons}
                         onClick={() => props.onLanguageChange(constants.languages.EN)}>en
                    </div>
                    <div className={classes.languageButtons}
                         onClick={() => props.onLanguageChange(constants.languages.DE)}>de
                    </div>
                </div>

            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = state => {
    return {
        translation: state.languages.translation
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLanguageChange: language => dispatch(changeLanguage(language)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);