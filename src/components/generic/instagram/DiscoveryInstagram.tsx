import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { IFeed } from './instragramTypes';
import DiscoveryInstagramItem from './DiscoveryInstagramItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core';


type Props = {
  token: string | undefined;
  limit: number;
};



const DiscoveryInstagram = (props: Props) => {
  const [feeds, setFeedsData] = useState<IFeed[] | undefined>([])
  //use useRef to store the latest value of the prop without firing the effect
  const tokenProp = useRef(props.token);
  tokenProp.current = props.token;

  useEffect(() => {
    // this is to avoid memory leaks
    const abortController = new AbortController();
    async function fetchInstagramPost(props: Props) {
      try {
        axios
          .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${props.token}`)
          .then((resp) => {
            setFeedsData(resp.data.data)
          })
      } catch (err) {
        console.log('error', err)
      }
    }

    fetchInstagramPost(props);

    return () => {
      // cancel pending fetch request on component unmount
      abortController.abort();
    };
  }, [props.limit])

 

  return (
      <React.Fragment>
      {feeds ? feeds.map((feed) => (
        <DiscoveryInstagramItem key={feed.id} feed={feed}></DiscoveryInstagramItem>
          )) : ""}
      </React.Fragment>
  );
}

export default DiscoveryInstagram;