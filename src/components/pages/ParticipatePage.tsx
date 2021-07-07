import {
  createStyles,
  makeStyles,
  Theme,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../store/reducers/Store";
import DiscoveryButton from "../generic/DiscoveryButton";
import DiscoveryTextHeader from "../generic/DiscoveryTextHeader";
import DiscoveryImage from "../generic/DiscoveryImage";
import DiscoveryMarkdown from "../generic/DiscoveryMarkdown";
import constants from "../../utils/constants";


interface IParticipate {
  content: {
    topContent: string;
    mainContent: string;
    boxContent: string;
  };
  translation: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "white",
    },
    headerRow: {
      backgroundColor: theme.color.grey300,
      paddingLeft: "10%",
      paddingRight: "10%",
      height: "30vh",
      display: "flex",
      alignItems: "center",
    },
    topRow: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    topTextWrapper: {
      margin: "5% 10% 5% 10%",
      width: "35%",
    },
    topImageWrapper: {
      width: "35%",
      marginLeft: "5%",
      marginRight: "5%",
      display: "flex",
      alignItems: "center",
    },
    participateRow: {
      padding: "5% 10% 5% 10%",
      backgroundColor: theme.color.red300,
    },
    participateRowHeader: {
      fontSize: "clamp(1.5rem, 3vw, 2rem)",
    },
    participateRowContent: {
      padding: "5% 5% 0 5%",
      display: "flex",
      justifyContent: "center",
    },
    participateRowText: {
      fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
      marginBottom: "10%",
    },
    participateRowRightColumn: {
      marginLeft: "10%",
      width: "35%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignContent: "flex-end",
    },
    participateRowLeftColumn: {
      marginRight: "10%",
      width: "35%",
    },
    dividerWrapper: {
      display: "flex",
    },
    divider: {
      backgroundColor: "black",
      width: "2px",
      height: "100%",
    },
    mainRow: {
      padding: "5% 10% 5% 10%",
      display: "flex",
      flexWrap: "wrap",
    },
    mainRowText: {
      width: "50%",
    },
    mainRowRightColumn: {
      width: "40%",
      marginLeft: "10%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    mainRowBox: {
      padding: "5% 10% 5% 10%",
      backgroundColor: theme.color.grey300,
    },
    mainRowButton: {
      margin: "5% 0 5% 0",
    },
    mainRowContact: {
      margin: "5% 0 5% 0",
    },
    [theme.breakpoints.down("sm")]: {
      topImageWrapper: {
        margin: "0 10% 5% 10%",
        width: "70%",
      },
      topTextWrapper: {
        width: "100%",
        marginRight: "10%",
        marginLeft: "10%",
      },
      participateRowRightColumn: {
        marginLeft: "0",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      },
      participateRowLeftColumn: {
        marginRight: "0",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      },
      participateRowContent: {
        flexDirection: "column",
        justifyContent: "center",
      },
      divider: {
        margin: "5% 0 5% 0",
        height: "1px",
        width: "100%",
      },
      participateRowText: {
        marginBottom: "5%",
      },
      mainRowText: {
        width: "100%",
      },
      mainRowRightColumn: {
        width: "100%",
        marginLeft: 0,
        marginTop: "5%",
      },
    },
    [theme.breakpoints.up("md")]: {
      topImageWrapper: {
        marginTop: "-25%",
        zIndex: 2,
      },
    },
  })
);

const ParticipateContent: React.FC<IParticipate> = (props) => {
  const classes = useStyles();
  const t = props.translation;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const divider = matches ? (
    <div className={classes.dividerWrapper}>
      <div className={classes.divider}></div>
    </div>
  ) : (
    <div className={classes.divider}></div>
  );
  return (
    <div className={classes.root}>
      <div className={classes.headerRow}>
        <DiscoveryTextHeader>{t.participate.title}</DiscoveryTextHeader>
      </div>
      <div className={classes.topRow}>
        <div className={classes.topTextWrapper}>
          <DiscoveryMarkdown source={props.content.topContent} />
        </div>
        <div className={classes.topImageWrapper}>
          <DiscoveryImage src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"></DiscoveryImage>
        </div>
      </div>
      <div className={classes.participateRow}>
        <div className={classes.participateRowHeader}>
          {t.participate.redBoxTitle}
        </div>
        <div className={classes.participateRowContent}>
          <div className={classes.participateRowLeftColumn}>
            <div className={classes.participateRowText}>
              {t.participate.redBoxMentee}
            </div>
            <DiscoveryButton to="">
              {t.participate.redBoxMenteeButton}
            </DiscoveryButton>
          </div>
          {divider}
          <div className={classes.participateRowRightColumn}>
            <div className={classes.participateRowText}>
              {t.participate.redBoxMentor}
            </div>
            <DiscoveryButton to="">
              {t.participate.redBoxMenteeButton}
            </DiscoveryButton>
          </div>
        </div>
      </div>
      <div className={classes.mainRow}> 
        <DiscoveryMarkdown className={classes.mainRowText} source={props.content.mainContent}></DiscoveryMarkdown>
        <div className={classes.mainRowRightColumn}>
          <DiscoveryMarkdown className={classes.mainRowBox} source={props.content.boxContent}></DiscoveryMarkdown>
          <div className={classes.mainRowButton}>
            <DiscoveryButton to="/">Melde dich hier als Mentee an</DiscoveryButton>
          </div>
          <div className={classes.mainRowContact}>
            Hast du noch Fragen? Schreib uns! {constants.links.contact}
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

class ParticipatePage extends React.Component<IProps, IParticipate> {
  state = {
    content: {
      topContent: "",
      mainContent: "",
      boxContent: "",
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
    const responseTop = await fetch(
      `pages/${this.props.currentLanguage}/participate/topContent.md`
    );
    const responseMain = await fetch(
      `pages/${this.props.currentLanguage}/participate/mainContent.md`
    );
    const responseBox = await fetch(
      `pages/${this.props.currentLanguage}/participate/boxContent.md`
    );

    const topContent = await responseTop.text();
    const mainContent = await responseMain.text();
    const boxContent = await responseBox.text();

    this.setState({
      content: { topContent, mainContent, boxContent },
    });
  };
  render() {
    return (
      <ParticipateContent
        content={this.state.content}
        translation={this.props.translation}
      ></ParticipateContent>
    );
  }
}

const mapStateToProps = (store: IApplicationState) => {
  return {
    currentLanguage: store.languages.currentLanguage,
    translation: store.languages.translation,
  };
};

export default connect(mapStateToProps, null)(ParticipatePage);
