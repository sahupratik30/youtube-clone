import { Avatar, Button } from "@material-ui/core";
import styles from "./VideoChannel.module.css";
import React from "react";
import { useHistory } from "react-router-dom";

const VideoChannel = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/channel");
  };
  return (
    <React.Fragment>
      <div className={styles.videochannel}>
        <div className={styles.videochannel__details}>
          <Avatar
            src="https://lh3.googleusercontent.com/a/AATXAJzUbJ3HrEku0B1FA7BOz2iLI_klW8Lap9W66H5g4w=s360-p-rw-no-mo"
            className={styles.videochannel__avatar}
            onClick={handleClick}
          />
          <div className={styles.videochannel__channel}>
            <p className={styles.user}>Pratik Sahu</p>
            <p className={styles.subs}>1.38K subscribers</p>
          </div>
        </div>
        <Button className={styles.subs__btn} variant="contained">
          SUBSCRIBE
        </Button>
      </div>
      <p className={styles.videochannel__description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum
        perferendis voluptate expedita optio repudiandae ex ad cumque. Libero
        natus vero labore consectetur obcaecati optio totam soluta blanditiis
        veniam? Labore!
      </p>
      <p className={styles.show__btn}>SHOW MORE</p>
      <div className={styles.hr} />
    </React.Fragment>
  );
};

export default VideoChannel;
