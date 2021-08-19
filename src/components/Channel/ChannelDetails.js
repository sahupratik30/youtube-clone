import { Avatar, Button } from "@material-ui/core";
import React from "react";
import styles from "./ChannelDetails.module.css";
const ChannelDetails = () => {
  return (
    <div className={styles.channeldetails}>
      <div className={styles.channeldetails__left}>
        <Avatar
          className={styles.channeldetails__avatar}
          src="https://lh3.googleusercontent.com/a/AATXAJzUbJ3HrEku0B1FA7BOz2iLI_klW8Lap9W66H5g4w=s360-p-rw-no-mo"
        />
        <div className={styles["channeldetails__left--description"]}>
          <h3 className={styles.channeldetails__name}>Pratik Sahu</h3>
          <p className={styles.channeldetails__subs}>618K subscribers</p>
        </div>
      </div>
      <div className={styles.channeldetails__right}>
        <Button className={styles.subs__btn} variant="contained">
          SUBSCRIBE
        </Button>
      </div>
    </div>
  );
};

export default ChannelDetails;
