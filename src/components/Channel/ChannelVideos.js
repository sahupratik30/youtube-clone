import { PlayArrow } from "@material-ui/icons";
import React from "react";
import styles from "./ChannelVideos.module.css";
import VideoItem from "./VideoItem";
import videos from "../Videos/videos";
const ChannelVideos = () => {
  return (
    <div className={styles.channelvideos}>
      <div className={styles.channelvideos__uploads}>
        <p>Uploads</p>
        <div className={styles.channelvideos__play}>
          <PlayArrow className={styles.channelvideos__playicon} />
          <h5>PLAY ALL</h5>
        </div>
      </div>
      <div className={styles.channelvideos__videos}>
        {videos.map((video) => {
          return (
            <VideoItem
              thumbnail={video.thumbnail}
              description={video.description}
              details={video.details}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChannelVideos;
