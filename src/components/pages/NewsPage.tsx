import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../store/reducers/Store";
import DiscoveryTextHeader from "../generic/DiscoveryTextHeader";
import DiscoveryMarkdown from "../generic/DiscoveryMarkdown";
import DiscoveryInstagram from "../generic/instagram/DiscoveryInstagram";

interface INews {
  content: {
    newsContent: string;
    nextDates: string;
  };
  translation: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

    },
    headerRow: {
      backgroundColor: theme.color.grey300,
      paddingLeft: "10%",
      paddingRight: "10%",
      height: "28vh",
      display: "flex",
      alignItems: "center",
    },
    headerRowText: {
      maxWidth: "60%",
    },
    newsRow: {
      backgroundColor: "white",
      padding: "0 10% 5% 10%",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))"
    },
    newsContent: {
      paddingTop: "2%",
    },
    datesBox: {
      backgroundColor: theme.color.grey300,
      margin: "-75px 0 0 20%",
    },
    datesBoxContent: {
      padding: "3% 5% 7% 5%",
      fontSize: "20px",
    },
    datesBoxHeader: {
      height: "75px",
      paddingLeft: "8%",
      backgroundColor: theme.color.grey500,
      fontSize: "24px",
      fontWeight: 500,
      display: "flex",
      alignItems: "center",
    },
    instagramRow: {
      padding: "5% 0 5% 0",
      position: "relative",
    },
    instagramFeed: {
      display: "flex",
      flexWrap: "wrap",
      marginLeft: "30%",
    },
    instagramRowHeader: {
      width: "30%",
    },
    instagramRowHeaderText: {
      margin: "0 10% 0 35%",
      fontSize: "24px",
      paddingBottom: "3%",
      borderBottom: "2px solid black"

    },
    instagramBackground: {
      zIndex: -1,
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      display: "flex",
    },
    instagramBackgroundLeftBox: {
      background:
        "linear-gradient(to bottom left, " + theme.color.grey300 + " 0%, " + theme.color.grey300 + " 50%, " + theme.color.grey500 + " 50%, " + theme.color.grey500 + " 100%)",
      width: "70%",
      height: "100%",
    },
    instagramBackgroundRightBox: {
      height: "100%",
      width: "30%",
      background: theme.color.grey300,
    },
    instagramContent: {
      zIndex: 1
    },
    [theme.breakpoints.down("md")]: {
      datesBox: {
        margin: "5% 0 0 5%",
      },
      datesBoxHeader: {
        height: "60px",
        paddingLeft: "8%",
        backgroundColor: theme.color.grey500,
        fontSize: "20px",
        fontWeight: 500,
      },
      headerRowText: {
        maxWidth: "100%",
      },
    },
    [theme.breakpoints.down("sm")]: {
      newsRow: {
        display: "flex",
        flexDirection: "column"
      },
      datesBox: {
        margin: "5% 0 0 0",
      },
    },
  })
);

const NewsContent: React.FC<INews> = (props) => {
  const classes = useStyles();
  const t = props.translation;

  return (
    <div className={classes.root}>
      <div className={classes.headerRow}>
        <div className={classes.headerRowText}>
          <DiscoveryTextHeader>{t.news.title}</DiscoveryTextHeader>
        </div>
      </div>
      <div className={classes.newsRow}>
        <div className={classes.newsContent}>
          <DiscoveryMarkdown source={props.content.newsContent} />
        </div>
        <div>
          <div className={classes.datesBox}>
            <div className={classes.datesBoxHeader}>
              Unsere nächste Termine
            </div>
            <div className={classes.datesBoxContent}>
              <DiscoveryMarkdown source={props.content.nextDates} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.instagramRow}>
        <div className={classes.instagramBackground}>
          <div className={classes.instagramBackgroundLeftBox}></div>
          <div className={classes.instagramBackgroundRightBox}></div>
        </div>
        <div className={classes.instagramContent}>
          <div className={classes.instagramRowHeader}>
            <div className={classes.instagramRowHeaderText}>
              {t.news.instagram}
            </div>
          </div>
          <div className={classes.instagramFeed}>
            <DiscoveryInstagram token={process.env.REACT_APP_INSTAGRAM_API_KEY} limit={3}></DiscoveryInstagram>
          </div>
        </div>
      </div>
    </div>
  );
};

interface IProps {
  currentLanguage: string;
  translation: any;
  match: any;
}

class NewsPage extends React.Component<IProps> {
  state = {
    content: {
      newsContent: "",
      nextDates: "",
    },
    translation: {},
  };

  componentDidMount = async () => {
    await this.fetchContent();
  };

  componentDidUpdate = async () => {
    await this.fetchContent();
  };

  fetchContent = async () => {
    const responseNews = await fetch(
      `pages/${this.props.currentLanguage}/news/news.md`);
    const responseDates = await fetch(
      `pages/${this.props.currentLanguage}/news/nextDates.md`);

    const newsContent = await responseNews.text();
    const nextDates = await responseDates.text();

    this.setState({
      content: { newsContent, nextDates },
    });
  };

  render() {
    let t = this.props.translation;
    return (
      <NewsContent
        content={this.state.content}
        translation={this.props.translation}
      />
    );
  }
}

const mapStateToProps = (store: IApplicationState) => {
  return {
    currentLanguage: store.languages.currentLanguage,
    translation: store.languages.translation,
  };
};

export default connect(mapStateToProps, null)(NewsPage);
