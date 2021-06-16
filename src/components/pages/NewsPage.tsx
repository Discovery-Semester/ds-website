import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import ReactMarkdown from "react-markdown";
import { connect } from "react-redux";
import { IApplicationState } from "../../store/reducers/Store";

interface INews {
  content: {
    mainContent: string;
    firstQuote: string;
    secondQuote: string;
    thirdQuote: string;
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.color.primary,
    },
  })
);

const NewsContent: React.FC<INews> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ReactMarkdown source={props.content.mainContent} />
    </div>
  );
};

interface IProps {
  currentLanguage: string;
  translation: any;
  match: any;
}

class NewsPage extends React.Component<IProps> {
  
  render() {
    let t = this.props.translation;
    return (
      <></>
    );
  }
}

const mapStateToProps = (store: IApplicationState) => {
  return {
    currentLanguage: store.languages.currentLanguage,
    translation: store.languages.translation.news,
  };
};

export default connect(mapStateToProps, null)(NewsPage);
