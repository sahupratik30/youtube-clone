import React from "react";
import styles from "./Channel.module.css";
import channelBanner from "../../assets/channel-banner.jpg";
import ChannelDetails from "./ChannelDetails";
import ChannelLinks from "./ChannelLinks";
import ChannelVideos from "./ChannelVideos";
const Channel = () => {
  return (
    <div className={styles.channel}>
      <img
        src={channelBanner}
        alt="banner"
        className={styles.channel__banner}
      />
      <ChannelDetails />
      <ChannelLinks />
      <ChannelVideos />
    </div>
  );
};

export default Channel;
