import React from 'react'
import { IFeed } from './instragramTypes';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import constants from '../../../utils/constants';

type Props = {
  feed: IFeed;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: "18vw",
      height: "18vw",
      objectFit: "cover",
      margin: "10px",
      opacity: 1,
      transition: "opacity 0.2s ease-in-out",
      cursor: "pointer",
      "&:hover": {
        opacity: 0.85,
      },
    }
  })
);


const DiscoveryInstagramItem = (props: Props) => {
  const { id, caption, media_type, media_url } = props.feed;
  const classes = useStyles();
  let post;

  switch (media_type) {
    case "VIDEO":
      post = (
        <a href={constants.links.instagram} target="_blank">
          <video
            className={classes.image}
            src={media_url}
            controls>
          </video>
        </a>
      )
      break;
    case "CAROUSEL_ALBUM": // TODO: Add multiple posts icon
      post = (
        <a href={constants.links.instagram} target="_blank">
          <img
            className={classes.image}
            id={id}
            src={media_url}
            alt={caption}
          />
        </a>
      );
      break;
    default:
      post = (
        <a href={constants.links.instagram} target="_blank">
          <img
            className={classes.image}
            id={id}
            src={media_url}
            alt={caption}
          />
        </a>
      );
  }

  return (
    <React.Fragment>
      {post}
    </React.Fragment>
  );
}

export default DiscoveryInstagramItem;