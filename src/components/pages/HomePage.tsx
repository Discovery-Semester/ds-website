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

// Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IHome {
  content: {
    mainContent: string;
    firstQuote: string;
    secondQuote: string;
    thirdQuote: string;
  };
  translation: any;
}

const footerRowHeight = 75;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topRow: {
      height: "35vh",
      display: "flex",
      position: "relative",
      backgroundColor: theme.color.secondary,
      marginBlockStart: theme.spacing(0),
      marginBlockEnd: theme.spacing(0),
    },
    headerText: {
      position: "absolute",
      top: "0",
      left: "0",
      display: "flex",
      height: "100%",
      alignItems: "center",
      paddingLeft: "10vw",
      paddingRight: "10vw",
      maxWidth: "900px",
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
    box: {
      background:
        "linear-gradient(to bottom right, #f4f7f8 0%, #f4f7f8 50%, #e9eff1 50%, #e9eff1 100%)",
      width: "30vw",
      height: "100%",
    },
    mainBox: {
      background:
        "linear-gradient(to bottom left, #fff 0%, #fff 50%, #e9eff1 50%, #e9eff1 100%)",
      width: "20%",
      height: "100%",
    },
    mainWrapper: {
      height: (footerRowHeight / 80) * 20 + "vh", // to make two similar triangles
      display: "flex",
      position: "relative",
    },
    participateButton: {
      position: "absolute",
      top: "15%",
      left: "10vw",
    },
    footerRow: {
      height: footerRowHeight + "vh",
      display: "flex",
      position: "relative",
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
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      paddingLeft: "5vw",
      paddingRight: "5vw",
    },
    quoteRow: {
      display: "flex",
      alignItems: "center",
      paddingTop: "5vw",
      paddingBottom: "5vw",
      height: "calc(" + footerRowHeight + "vh - 40px)",
      flexWrap: "wrap",
    },
    quoteTextWrapper: {
      position: "relative"
    },
    quoteMarkWrapper: {
      position: "absolute",
      top: "10px",
      left: "-30px",
      color: theme.color.red500,
    },
    quoteImageWrapper: {
      width: "50%",
      marginLeft: "5vw",
      display: "flex",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      md: {
        width: "100vw",
        paddingRight: "10vw",
      },
      imageWrapper: {
        paddingRight: "10vw",
        width: "100%",
      },
      quoteImageWrapper: {
        width: "100%",
        marginLeft: "10vw",
        marginRight: "10vw"
      },
      quoteTextWrapper: {
        width: "100%",
        marginLeft: "10vw",
        marginRight: "10vw",
      },
    },
    [theme.breakpoints.up("sm")]: {
      md: {
        width: "50vw",
        paddingRight: "0",
      },
      imageWrapper: {
        paddingRight: "0",
        paddingLeft: "5vw",
        width: "35vw",
      },
      quoteImageWrapper: {
        width: "40%",
        marginLeft: "5%",
        marginRight: "0"
      },
      quoteTextWrapper: {
        width: "35%",
        marginLeft: "10%",
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
        marginTop: "-15vh",
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
    <div>
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
              <DiscoveryImage src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"></DiscoveryImage>
            </div>
          </div>
        </div>
        <div className={classes.mainWrapper}>
          <div className={classes.mainBox}></div>
          <div className={classes.participateButton}>
            <DiscoveryButton to="/participate">
              {t.tabs.participate}
            </DiscoveryButton>
          </div>
        </div>
      </div>

      <div className={classes.footerRow}>
        <div className={classes.footerSpacer}></div>
        <div className={classes.footerBox}></div>
        <div className={classes.slider}>
          <Slider {...settings}>
            <div> {/* Needed to escape element.style display=inline-block from the slider package*/}
              <div className={classes.quoteRow}>
                <div className={classes.quoteImageWrapper}>
                  <DiscoveryImage src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"></DiscoveryImage>
                </div>
                <div className={classes.quoteTextWrapper}>
                  <div className={classes.quoteMarkWrapper}>
                    <FormatQuoteIcon/>
                  </div>
                  <DiscoveryMarkdown
                    source={props.content.firstQuote}
                  ></DiscoveryMarkdown>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.quoteRow}>
                <div className={classes.quoteImageWrapper}>
                < DiscoveryImage width="30vw" src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"></DiscoveryImage>
                </div>
                <div className={classes.quoteTextWrapper}>
                  <div className={classes.quoteMarkWrapper}>
                    <FormatQuoteIcon/>
                  </div>
                  <DiscoveryMarkdown
                    source={props.content.secondQuote}
                  ></DiscoveryMarkdown>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.quoteRow}>
                <div className={classes.quoteImageWrapper}>
                < DiscoveryImage width="30vw" src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"></DiscoveryImage>
                </div>
                <div className={classes.quoteTextWrapper}>
                  <div className={classes.quoteMarkWrapper}>
                    <FormatQuoteIcon/>
                  </div>
                  <DiscoveryMarkdown
                    source={props.content.thirdQuote}
                  ></DiscoveryMarkdown>
                </div>
              </div>
            </div>
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
      firstQuote: "",
      secondQuote: "",
      thirdQuote: "",
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
      `pages/${this.props.currentLanguage}/home/mainContent.md`
    );
    const responseFirst = await fetch(
      `pages/${this.props.currentLanguage}/home/firstQuote.md`
    );
    const responseSecond = await fetch(
      `pages/${this.props.currentLanguage}/home/secondQuote.md`
    );
    const responseThird = await fetch(
      `pages/${this.props.currentLanguage}/home/thirdQuote.md`
    );

    const mainContent = await responseMain.text();
    const firstQuote = await responseFirst.text();
    const secondQuote = await responseSecond.text();
    const thirdQuote = await responseThird.text();

    this.setState({
      content: { mainContent, firstQuote, secondQuote, thirdQuote },
    });
  };

  render() {
    return (
      <HomeContent
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

export default connect(mapStateToProps, null)(HomePage);
