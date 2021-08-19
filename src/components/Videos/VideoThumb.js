import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./VideoThumb.module.css";
const VideoThumb = (props) => {
  const history = useHistory();
  const handleVideoClick = () => {
    history.push("/watch");
  };
  const handleChannelClick = () => {
    history.push("/channel");
  };
  return (
    <div className={styles.videothumb}>
      <img
        src={props.thumbnail}
        alt="video"
        className={styles.videothumb__image}
        onClick={handleVideoClick}
      />
      <div className={styles.videothumb__description}>
        <div className={styles.videothumb__main}>
          <img src={props.avatar} alt="avatar" onClick={handleChannelClick} />
          <h4 onClick={handleVideoClick}>{props.description}</h4>
        </div>
        <h5 onClick={handleChannelClick}>{props.channel}</h5>
        <h5>{props.details}</h5>
      </div>
    </div>
  );
};

export default VideoThumb;
