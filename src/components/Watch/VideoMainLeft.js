import React from "react";
import styles from "./VideoMainLeft.module.css";
import videoUrl from "../../assets/videos/video.mp4";
import VideoDescription from "./VideoDescription";
import VideoChannel from "./VideoChannel";
const VideoMainLeft = () => {
  return (
    <React.Fragment>
      <div className={styles.videoleft}>
        <video className={styles.videoleft__video} autoPlay controls>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
      <h1 className={styles.videoleft__title}>
        Food Ordering App Using ReactJS
      </h1>
      <VideoDescription />
      <VideoChannel />
    </React.Fragment>
  );
};

export default VideoMainLeft;
