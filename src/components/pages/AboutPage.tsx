import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../store/reducers/Store";
import DiscoveryTextHeader from "../generic/DiscoveryTextHeader";
import DiscoveryMarkdown from "../generic/DiscoveryMarkdown";
import DiscoveryTeamMember from "../generic/DiscoveryTeamMember";
import constants from "../../utils/constants";


interface IAbout {
  content: {
    mainContent: string;
  };
  translation: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "white",
    },
    headerRow: {
      backgroundColor: theme.color.grey500,
      padding: "5% 10% 4% 10%",
    },
    headerContentWrapper: {
      columnCount: 2,
      paddingTop: "2%",
    },
    membersGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "10px 5%",
      padding: "5% 10% 5% 10%"
    },
    contactBox: {
      fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
      gridColumn: "span 2 / auto",
      marginTop: "5%",
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
      contactBox: {
        gridColumn: "span 1/ auto",
        paddingRight: "5%"
      },
      membersGrid: {
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr)))",
      },
      headerContentWrapper: {
        columnCount: 1,
      },
    }
  })
);

const AboutContent: React.FC<IAbout> = (props) => {
  const classes = useStyles();
  const t = props.translation;
  return (
    <div className={classes.root}>
      <div className={classes.headerRow}>
        <DiscoveryTextHeader>{t.about.title}</DiscoveryTextHeader>
        <DiscoveryMarkdown
          className={classes.headerContentWrapper}
          source={props.content.mainContent}
        ></DiscoveryMarkdown>
      </div>
      <div className={classes.membersGrid}>
        <DiscoveryTeamMember
          src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          name="Amrita"
        >
          "Chemist by training but considering becoming a chef so I can at least
          eat my products"
        </DiscoveryTeamMember>
        <DiscoveryTeamMember
          src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          name="Amrita"
        >
          "Chemist by training but considering becoming a chef so I can at least
          eat my products"
        </DiscoveryTeamMember>
        <DiscoveryTeamMember
          src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          name="Amrita"
        >
          "Chemist by training but considering becoming a chef so I can at least
          eat my products"
        </DiscoveryTeamMember>
        <DiscoveryTeamMember
          src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          name="Amrita"
        >
          "Chemist by training but considering becoming a chef so I can at least
          eat my products"
        </DiscoveryTeamMember>
        <DiscoveryTeamMember
          src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          name="Amrita"
        >
          "Chemist by training but considering becoming a chef so I can at least
          eat my products"
        </DiscoveryTeamMember>
        <DiscoveryTeamMember
          src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          name="Amrita"
        >
          "Chemist by training but considering becoming a chef so I can at least
          eat my products"
        </DiscoveryTeamMember>
        <div className={classes.contactBox}> 
          {t.about.contact}
          <br />
          <a href={"mailto:" + constants.links.contact} className={classes.contactLink}>→ {constants.links.contact}</a>
        </div>
      </div>
    </div>
  );
};

interface IProps {
  currentLanguage: string;
  translation: any;
}

class AboutPage extends React.Component<IProps, IAbout> {
  state = {
    content: {
      mainContent: "",
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
    const responseMain = await fetch(
      `pages/${this.props.currentLanguage}/about/mainContent.md`
    );

    const mainContent = await responseMain.text();

    this.setState({
      content: { mainContent },
    });
  };
  render() {
    return (
      <AboutContent
        content={this.state.content}
        translation={this.props.translation}
      ></AboutContent>
    );
  }
}

const mapStateToProps = (store: IApplicationState) => {
  return {
    currentLanguage: store.languages.currentLanguage,
    translation: store.languages.translation,
  };
};

export default connect(mapStateToProps, null)(AboutPage);
