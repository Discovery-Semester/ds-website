import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux";
import Link from "@material-ui/core/Link";
import constants from "../../../common/constants";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        marginBottom: 10
    },
}));

const PaperSheet = props => {
    const classes = useStyles();
    const {translation} = props;
    return (
        <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
                {translation.quickLinks}
            </Typography>
            <Typography>
                {/* todo check the current language*/}
                <Link href={constants.links.de.signUpMenteesURL} className={classes.link}>
                    {translation.signUpMentees}
                </Link>
            </Typography>
            <Typography>
                <Link href={constants.links.de.signUpMentorsURL} className={classes.link}>
                    {translation.signUpMentors}
                </Link>
            </Typography>

            <Typography variant="h5" component="h3">
                {translation.contact}
            </Typography>
            <Typography>
                <Link href={constants.links.contact} className={classes.link}>
                    {constants.links.contact}
                </Link>
            </Typography>
        </Paper>
    );
};

const mapStateToProps = state => {
    return {
        translation: state.languages.translation,
        currentLanguage: state.languages.currentLanguage
    };
};


export default connect(mapStateToProps, null)(PaperSheet);