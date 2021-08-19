import React from "react";
import styles from "./VideoDescription.module.css";
import VideoIcons from "./VideoIcons";
const VideoDescription = () => {
  return (
    <div className={styles.videodescription}>
      <p className={styles.videodescription__views}>
        1,001 views • 30 Jan 2021
      </p>
      <VideoIcons />
    </div>
  );
};

export default VideoDescription;
