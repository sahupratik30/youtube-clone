import Search from "@material-ui/icons/Search";
import React from "react";
import styles from "./ChannelLinks.module.css";
const ChannelLinks = () => {
  return (
    <div className={styles.channellinks}>
      <div className={styles.channellinks__links}>
        <h3>HOME</h3>
        <h3>VIDEOS</h3>
        <h3>PLAYLISTS</h3>
        <h3>COMMUNITY</h3>
        <h3>CHANNELS</h3>
        <h3>ABOUT</h3>
        <Search className={styles.channellinks__search} />
      </div>
    </div>
  );
};

export default ChannelLinks;
