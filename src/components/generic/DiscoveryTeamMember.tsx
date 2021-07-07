import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { ReactNode } from 'react';

type Props = {
    src: string,
    name: string,
    children: ReactNode,
    width?: string,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    name: {
      color: "#0076AA",
      fontSize: "24px",
      fontWeight: 500,
      margin: 0,
      alignText: "right",
      paddingBottom: "3px"
    },
    quote: {
      color: "#CC4400",
      fontStyle: "italic",
      fontSize: "20px",
      fontWeight: 500,
      width: "260px",
      marginLeft: "80px",
    },
    image: {
        boxShadow: "6px 6px #B4CAD3",
        height: "330px",
        width: "260px",
        transition: "all 0.3s ease-in-out",
        objectFit: "cover",
        "&:hover": {
          boxShadow: "0 0 " + theme.color.grey300,
        },
    },
    [theme.breakpoints.down("sm")]: {
      quote: {
        marginLeft:0,
      }
    },
    [theme.breakpoints.down(400)]: {
      image: {
        width: "100%",
      },
      quote: {
        width: "100%",
      }
    }
  }
));

export default function DiscoveryTeamMember(props: Props) {
    const classes = useStyles(props);
    return (
        <div className={classes.wrapper}>
          <div>
          <p className={classes.name}>{props.name}</p>
          <img className={classes.image} src={props.src} />
          <p className= {classes.quote}>{props.children}</p>
          </div>
        </div>
    );
}