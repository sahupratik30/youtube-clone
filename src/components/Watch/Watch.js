import React from "react";
import VideoMainLeft from "./VideoMainLeft";
import styles from "./Watch.module.css";
import VideoMainRight from "./VideoMainRight";
const Watch = () => {
  return (
    <div className={styles.watch}>
      <div className={styles.watch__left}>
        <VideoMainLeft />
      </div>
      <div className={styles.watch__right}>
        <VideoMainRight />
      </div>
    </div>
  );
};

export default Watch;
