import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../assets/logo-with-text-negative.svg'
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {changeLanguage} from "../../store/actions/languageActionCreator";
import constants from "../../common/constants";
import SideDrawer from "../SideDrawer";
import MenuIcon from '@material-ui/icons/Menu';
import {useMediaQuery} from 'react-responsive'
import Aux from "../../hoc/Aux";
import {toggleSideDrawer} from "../../store/actions/uiActionCreator";


const useStyles = makeStyles(theme => ({
    menuButton: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0)
    },
    logoButton: {
        marginLeft: -theme.spacing(2),
        marginRight: theme.spacing(0)
    },
    languageButtonsBorder: {
        cursor: 'pointer',
        borderBottom: '0.1em solid white',
        padding: '0.5em'
    },
    languageButtons: {
        cursor: 'pointer',
        padding: '0.5em'
    },
    menuButtons: {
        all: 'unset',
        fontWeight: 'bold',
        // Chrome has a too specific default rule that applies otherwise
        color: 'inherit',
    },
    rightMenu: {
        marginLeft: 'auto',
        marginRight: 0,
        display: 'flex'
    },
    logoImage: {
        height: 60,
    }
}));

const Header = props => {
    const classes = useStyles();
    const isBigScreen = useMediaQuery({minWidth: 992});
    return (
        <AppBar position="static"
                style={{
                    backgroundColor: constants.styling.mainColor,
                    alignItems: 'center',
                    position: 'relative'
                }}>
            <Toolbar variant="regular" style={{
                width: isBigScreen ? '80%' : '100%'
            }}>
                <IconButton edge="start" className={
                    isBigScreen ? classes.menuButton : classes.logoButton
                } size="medium" color="inherit" aria-label="menu">
                    <NavLink style={{all: "unset"}} to="/">
                        <img className={classes.logoImage} src={logo} alt="logo"/>
                    </NavLink>
                </IconButton>

                {isBigScreen ?
                    <Aux>
                        <div className={classes.rightMenu}>
                            {[
                                props.translation.mentees,
                                props.translation.mentors,
                                props.translation.news,
                                props.translation.about,
                            ].map((text, index) => (
                                <div key={index} style={{borderRight: '0.1em solid white', padding: '0.5em'}}>
                                    <Button color="inherit">
                                      <NavLink className={classes.menuButtons} to={constants.routes[index]}>
                                            {text}
                                        </NavLink>
                                    </Button>
                                </div>
                            ))}
                        </div>
                        <div style={{fontWeight: 'bold', marginLeft: '1rem'}}>
                            {[
                                constants.languages.EN,
                                constants.languages.DE
                            ].map((text, index) => (
                                <div key={index} className={
                                    index === 0 ? classes.languageButtonsBorder : classes.languageButtons
                                }
                                     onClick={() => props.onLanguageChange(text)}>
                                    {text}
                                </div>
                            ))}
                        </div>
                    </Aux>
                    :
                    <div className={classes.rightMenu}>
                        <IconButton onClick={() => props.onToggleSideDrawer(true)} edge="start"
                                    className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon fontSize="large"/>
                        </IconButton>
                        <SideDrawer/>
                    </div>
                }

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
        onToggleSideDrawer: open => dispatch(toggleSideDrawer(open))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
