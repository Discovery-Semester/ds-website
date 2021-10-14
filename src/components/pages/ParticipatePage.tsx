import {
  createStyles,
  makeStyles,
  Theme,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../store/reducers/Store";
import DiscoveryButton from "../generic/DiscoveryButton";
import DiscoveryTextHeader from "../generic/DiscoveryTextHeader";
import DiscoveryImage from "../generic/DiscoveryImage";
import DiscoveryMarkdown from "../generic/DiscoveryMarkdown";
import constants from "../../utils/constants";

import topImg from "../../assets/participate/topImg.jpg"

interface IParticipate {
  content: {
    topContent: string;
    mentee: string;
    menteeBox: string;
    mentor: string;
    mentorBox: string;
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
      fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
    },
    contactLink: {
      color: "black",
      textDecoration: "none",
      transition: "color 0.2s ease-in-out",
      '&:hover' : {
        color: "rgb(100, 100, 100)",
      }
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
        margin: "-5% 5% 5% 5%",
        zIndex: 2,
      },
    },
  })
);

const ParticipateContent: React.FC<IParticipate> = (props) => {
  const t = props.translation;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [menteeMentor, setMenteeMentor] = useState("mentee");
  const classes = useStyles();

  const mainContent =
    menteeMentor == "mentee" ? props.content.mentee : props.content.mentor;
  const boxContent =
    menteeMentor == "mentee"
      ? props.content.menteeBox
      : props.content.mentorBox;
    
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
          <DiscoveryImage src={topImg}></DiscoveryImage>
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
            <DiscoveryButton focus={menteeMentor == "mentee"} onClick={() => setMenteeMentor("mentee")}>
              {t.participate.redBoxMenteeButton}
            </DiscoveryButton>
          </div>
          {divider}
          <div className={classes.participateRowRightColumn}>
            <div className={classes.participateRowText}>
              {t.participate.redBoxMentor}
            </div>
            <DiscoveryButton focus={menteeMentor == "mentor"} onClick={() => setMenteeMentor("mentor")}>
              {t.participate.redBoxMentorButton}
            </DiscoveryButton>
          </div>
        </div>
      </div>

      <div className={classes.mainRow}>
        <DiscoveryMarkdown
          className={classes.mainRowText}
          source={mainContent}
        ></DiscoveryMarkdown>
        <div className={classes.mainRowRightColumn}>
          <DiscoveryMarkdown
            className={classes.mainRowBox}
            source={boxContent}
          ></DiscoveryMarkdown>
          <div className={classes.mainRowButton}>
            {
              menteeMentor == "mentee" ?
              <DiscoveryButton nav={false} to={t.participate.signUpMenteeURL}>
                {t.participate.signUpMentee}
              </DiscoveryButton> :
              <DiscoveryButton disabled={true} nav={false} to={t.participate.signUpMentorURL}>
                {t.participate.signUpMentor}
              </DiscoveryButton>
            }
           
          </div>
          <div className={classes.mainRowContact}>
            {t.participate.questions}
            <br />
            <a href={"mailto:" + constants.links.contact} className={classes.contactLink}>
              → {constants.links.contact}
            </a>
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
      mentee: "",
      menteeBox: "",
      mentor: "",
      mentorBox: "",
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
    const responseMentee = await fetch(
      `pages/${this.props.currentLanguage}/participate/mentee.md`
    );
    const responseMenteeBox = await fetch(
      `pages/${this.props.currentLanguage}/participate/menteeBox.md`
    );
    const responseMentor = await fetch(
      `pages/${this.props.currentLanguage}/participate/mentor.md`
    );
    const responseMentorBox = await fetch(
      `pages/${this.props.currentLanguage}/participate/mentorBox.md`
    );

    const topContent = await responseTop.text();
    const mentee = await responseMentee.text();
    const menteeBox = await responseMenteeBox.text();
    const mentor = await responseMentor.text();
    const mentorBox = await responseMentorBox.text();

    this.setState({
      content: { topContent, mentee, menteeBox, mentor, mentorBox },
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
