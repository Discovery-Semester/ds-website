import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { IApplicationState } from "../../store/reducers/Store";
import DiscoveryTextHeader from "../generic/DiscoveryTextHeader";
import DiscoveryMarkdown from "../generic/DiscoveryMarkdown";
import DiscoveryTeamMember from "../generic/DiscoveryTeamMember";
import constants from "../../utils/constants";
import quotes from "../../assets/team/quotes"
interface IAbout {
  content: {
    mainContent: string;
    images: any;
  };
  translation: any;
}

interface IImage {
  src: string;
  name: string;
}

interface IIndexable {
  [key: string]: string;
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
      padding: "5% 10% 5% 10%",
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
      "&:hover": {
        color: "rgb(100, 100, 100)",
      },
    },
    [theme.breakpoints.down("sm")]: {
      contactBox: {
        gridColumn: "span 1/ auto",
        paddingRight: "5%",
      },
      membersGrid: {
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr)))",
      },
      headerContentWrapper: {
        columnCount: 1,
      },
    },
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
        {props.content.images.map((image: IImage) => (
          <DiscoveryTeamMember
            src={image.src}
            name={image.name}>{(quotes as IIndexable)[image.name]}</DiscoveryTeamMember>
        ))}
        <div className={classes.contactBox}>
          {t.about.contact}
          <br />
          <a
            href={"mailto:" + constants.links.contact}
            className={classes.contactLink}
          >
            → {constants.links.contact}
          </a>
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
      images: [],
    },
    translation: {},
  };


  importAll(r: __WebpackModuleApi.RequireContext): IImage[] {
    return r.keys().map((fileName: string) => ({
      src: r(fileName).default, name: fileName.replace(/\.(png|jpe?g|svg)$/, "").replace(/.\//, ""),
    }));
  }

  componentDidMount = async () => {
    const images: any = this.importAll(
      require.context("../../assets/team", false, /\.(png|jpe?g|svg)$/)
    );
    this.setState({ content: { ...this.state.content, images } });
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
      content: { ...this.state.content, mainContent },
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
