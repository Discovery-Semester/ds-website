import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Aux from "../../containers/Aux";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {ShowChart} from "@material-ui/icons";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://discovery-semester.ch">
                discovery-semester.ch
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    footer: {
        padding: theme.spacing(2),
        marginTop: 'auto',
        backgroundColor: '#0a7a95',
        textAlign: 'center'
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <Aux>
            <CssBaseline/>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <BottomNavigation value={"test"} onChange={() => console.log("changed")}>
                        <BottomNavigationAction label="signal" value="signal" icon={<ShowChart/>}/>
                        <BottomNavigationAction label="hotlist" value="hotlist"/>
                        <BottomNavigationAction label="analyze" value="analyze"/>
                        <BottomNavigationAction label="learn" value="learn"/>
                        <BottomNavigationAction label="dashboard" value="dashboard"/>
                    </BottomNavigation>
                    <Typography variant="body1"><a
                        href={"mailto:contact@discovery-semester.ch"}>contact@discovery-semester.ch</a></Typography>
                    <Copyright/>

                </Container>
            </footer>
        </Aux>
    );
}