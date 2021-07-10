import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../store/reducers/Store";
import DiscoveryButton from "../generic/DiscoveryButton";
import DiscoveryTextHeader from "../generic/DiscoveryTextHeader";
import DiscoveryImage from "../generic/DiscoveryImage";
import DiscoveryMarkdown from "../generic/DiscoveryMarkdown";
import Slider from "react-slick";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

import topImg from "../../assets/home/topImg.jpg"
import quotes from "../../assets/home/quotes/quotes"

// Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface IImage {
  src: string;
  name: string;
}
interface IHome {
  content: {
    mainContent: string;
    images: IImage[]
  };
  translation: any;
  currentLanguage: string;
}
interface IIndexable {
  [key: string]: any;
}

const sliderOffset = "40px";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: sliderOffset
    },
    topRow: {
      display: "flex",
      position: "relative",
      backgroundColor: theme.color.grey500,
      marginBlockStart: theme.spacing(0),
      marginBlockEnd: theme.spacing(0),
    },
    box: {
      position: "absolute",
      top: 0,
      left: 0,
      background:
        "linear-gradient(to bottom right, #f4f7f8 0%, #f4f7f8 50%, #e9eff1 50%, #e9eff1 100%)",
      width: "30%",
      height: "100%"
    },
    headerText: {
      display: "flex",
      padding: "5% 10% 5% 10%",
      alignItems: "center",
      maxWidth: "900px",
      zIndex: 2,
    },
    mainRow: {
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
    },
    mainContent: {
      display: "flex",
      paddingLeft: "10vw",
      paddingTop: "5vh",
      flexWrap: "wrap",
    },
    mainBox: {
      background:
        "linear-gradient(to bottom left, #fff 0%, #fff 50%, #e9eff1 50%, #e9eff1 100%)",
      width: "20%",
      height: "100px",
    },
    mainWrapper: {
      height: "10%", // TODO: Make two similar triangles
      display: "flex",
      position: "relative",
    },
    participateButton: {
      position: "absolute",
      top: "15%",
      left: "10vw",
    },
    footerRow: {
      display: "flex",
      position: "relative",
    },
    footerBackground: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "calc(100% + " + sliderOffset + ")",
      display: "flex",
    },
    footerSpacer: {
      backgroundColor: "#f4f7f8",
      width: "20%",
    },
    footerBox: {
      background:
        "linear-gradient(to bottom left,  #e9eff1 0%, #e9eff1 50%, #f4f7f8 50%,  #f4f7f8 100%)",
      width: "80%",
      height: "100%",
    },
    slider: {
      width: "100%",
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    quoteRow: {
      display: "flex",
      alignItems: "center",
      paddingTop: "5%",
      paddingBottom: "5%",
      flexWrap: "wrap",
    },
    quoteTextWrapper: {
      position: "relative",
      fontSize: "clamp(1rem, 2vw, 2rem)",
      fontWeight: 600,
    },
    quoteMarkWrapper: {
      position: "absolute",
      top: "-10px",
      left: "-30px",
      color: theme.color.red500,
    },
    quoteImageWrapper: {
      width: "30%",
      marginLeft: "5%",
      display: "flex",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      md: {
        width: "100vw",
        paddingRight: "10%",
      },
      imageWrapper: {
        paddingRight: "10%",
        width: "100%",
      },
      quoteImageWrapper: {
        width: "100%",
        marginLeft: "10%",
        marginRight: "10%"
      },
      quoteTextWrapper: {
        width: "100%",
        margin: "5% 10% 5% 10%"
      },
    },
    [theme.breakpoints.up("sm")]: {
      md: {
        width: "50vw",
        paddingRight: "0",
      },
      imageWrapper: {
        paddingRight: "0",
        paddingLeft: "5%",
        width: "35%",
      },
      quoteImageWrapper: {
        marginLeft: "5%",
        marginRight: "0"
      },
      quoteTextWrapper: {
        width: "50%",
        marginLeft: "15%",
        marginRight: "0",
      },
    },
    [theme.breakpoints.down("md")]: {
      imageWrapper: {
        marginTop: 0,
      },
    },
    [theme.breakpoints.up("md")]: {
      imageWrapper: {
        marginTop: "-15%",
        zIndex: 2,
      },
    },
  })
);

const HomeContent: React.FC<IHome> = (props) => {
  const classes = useStyles();
  const t = props.translation;
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={classes.root}>
      <div className={classes.topRow}>
        <div className={classes.box}></div>
        <div className={classes.headerText}>
          <DiscoveryTextHeader>{t.home.welcome}</DiscoveryTextHeader>
        </div>
      </div>
      <div className={classes.mainRow}>
        <div className={classes.mainContent}>
          <div className={classes.md}>
            <DiscoveryMarkdown
              source={props.content.mainContent}
            ></DiscoveryMarkdown>
          </div>
          <div className={classes.imageWrapper}>
            <div className={classes.imagePosition}>
              <DiscoveryImage src={topImg}></DiscoveryImage>
            </div>
          </div>
        </div>
        <div className={classes.mainWrapper}>
          <div className={classes.mainBox}></div>
          <div className={classes.participateButton}>
            <DiscoveryButton nav={true} to="/participate">
              {t.tabs.participate}
            </DiscoveryButton>
          </div>
        </div>
      </div>
      <div className={classes.footerRow}>
        <div className={classes.footerBackground}>
          <div className={classes.footerSpacer}></div>
          <div className={classes.footerBox}></div>
        </div>
        <div className={classes.slider}>
          <Slider {...settings}>
            {props.content.images.map((image: IImage) => (
              <div> {/* Needed to escape element.style display=inline-block from the slider package*/}
                <div className={classes.quoteRow}>
                  <div className={classes.quoteImageWrapper}>
                    <DiscoveryImage src={image.src}></DiscoveryImage>
                  </div>
                  <div className={classes.quoteTextWrapper}>
                    <div className={classes.quoteMarkWrapper}>
                      <FormatQuoteIcon />
                    </div>
                    <div className={classes.quoteText}>
                      {((quotes as IIndexable)[props.currentLanguage] as IIndexable)[image.name]}
                      <br/><br/>
                      {image.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

interface IProps {
  currentLanguage: string;
  translation: any;
  match: any;
  styles: any;
  theme: any;
}

class HomePage extends React.Component<IProps, IHome> {
  state = {
    content: {
      mainContent: "",
      images: [],
    },
    translation: {},
    currentLanguage: ""
  };

  importAll(r: __WebpackModuleApi.RequireContext): IImage[] {
    return r.keys().map((fileName: string) => ({
      src: r(fileName).default, name: fileName.replace(/\.(png|jpe?g|svg)$/, "").replace(/.\//, ""),
    }));
  }

  componentDidMount = async () => {
    const images: any = this.importAll(
      require.context("../../assets/home/quotes", false, /\.(png|jpe?g|svg)$/)
    );
    this.setState({ content: { ...this.state.content, images } });
    await this.fetchContent();
  };

  componentDidUpdate = async () => {
    await this.fetchContent();
  };

  fetchContent = async () => {
    const responseMain = await fetch(
      `pages/${this.props.currentLanguage}/home/mainContent.md`
    );

    const mainContent = await responseMain.text();


    this.setState({
      content: { ...this.state.content, mainContent },
    });
  };

  render() {
    return (
      <HomeContent
        content={this.state.content}
        translation={this.props.translation}
        currentLanguage={this.props.currentLanguage}
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

export default connect(mapStateToProps, null)(HomePage);
