import React from "react";
import styles from "./VideoGrid.module.css";
import VideoThumb from "./VideoThumb";
import videos from "./videos";
const VideoGrid = () => {
  return (
    <div className={styles.videogrid}>
      {videos.map((video) => {
        return (
          <VideoThumb
            key={video.id}
            thumbnail={video.thumbnail}
            avatar={video.avatar}
            description={video.description}
            channel={video.channel}
            details={video.details}
          />
        );
      })}
    </div>
  );
};

export default VideoGrid;
