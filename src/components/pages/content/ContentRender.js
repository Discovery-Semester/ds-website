import React from 'react';
import useMediaQuery from "react-responsive/src/useMediaQuery";
import ReactMarkdown from "react-markdown";
import Grid from '@material-ui/core/Grid';
import Aux from "../../../hoc/Aux";
import FbPagePlugin from "./FbPagePlugin";
import QuickLinks from "./QuickLinks";

// const useStyles = makeStyles(theme => ({
//     container: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(12, 1fr)',
//         gridGap: theme.spacing(3),
//     },
//     paper: {
//         padding: theme.spacing(1),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//         whiteSpace: 'nowrap',
//         marginBottom: theme.spacing(1),
//     },
//     divider: {
//         margin: theme.spacing(2, 0),
//     },
// }));
const ContentRender = props => {
    const isBigScreen = useMediaQuery({minWidth: 992});
    // const classes = useStyles();
    const pageContent = <ReactMarkdown source={props.content}/>;
    const fbPagePlugin = <FbPagePlugin/>;
    const quickLinks = <QuickLinks/>;
    return (
        isBigScreen ?
            <Grid container spacing={4}>
                <Grid item xs={8}>
                    {pageContent}
                </Grid>
                <Grid item xs={4}>
                    {quickLinks}
                    {fbPagePlugin}
                </Grid>
            </Grid>
            :
            <Aux>
                {pageContent}
                {quickLinks}
                {fbPagePlugin}
            </Aux>
    );
};

export default ContentRender;