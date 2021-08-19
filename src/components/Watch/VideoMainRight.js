import React from "react";
import videos from "../Videos/videos";
import VideoRight from "./VideoRight";
const VideoMainRight = () => {
  return (
    <React.Fragment>
      {videos.map((video) => {
        return (
          <VideoRight
            thumbnail={video.thumbnail}
            description={video.description}
            channel={video.channel}
            details={video.details}
          />
        );
      })}
    </React.Fragment>
  );
};

export default VideoMainRight;
