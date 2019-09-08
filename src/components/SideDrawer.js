import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {changeLanguage} from "../store/actions/languageActionCreator";
import {connect} from "react-redux";
import logo from "../assets/logo-with-text-negativ.png";
import constants from "../common/constants";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    list: {
        width: 300,
    },
    fullList: {
        width: 'auto',
    },
    logoContainer: {
        width: '100%',
        backgroundColor: constants.styling.mainColor,
    },
    logo: {
        width: 280,
        margin: 10
    },
    languageButton: {
        marginLeft: 10
    }
});


const SideDrawer = props => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        open: true
    });

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({...state, open});
    };

    const sideList = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <div className={classes.logoContainer}>
                <img className={classes.logo} src={logo} alt="logo"/>
            </div>
            <Divider/>
            <List>
                {[
                    props.translation.mentees,
                    props.translation.mentors,
                    props.translation.news,
                    props.translation.about,
                ].map((text, index) => (
                    <ListItem onClick={() => console.log('clicked: ', text)} button key={text}>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <ListItem button key="Language">
                <ListItemText primary={props.translation.language}/>

                {[
                    constants.languages.EN,
                    constants.languages.DE
                ].map((text, index) => (
                    <Button className={classes.languageButton} key={index} color="inherit" variant="outlined">
                        {text}
                    </Button>
                ))}
            </ListItem>
            <Divider/>
        </div>
    );

    return (
        <Drawer open={state.open} onClose={toggleDrawer(false)}>
            {sideList()}
        </Drawer>
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

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);