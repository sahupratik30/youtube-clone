import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./VideoItem.module.css";
const VideoItem = (props) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/watch");
  };
  return (
    <div className={styles.videoitem}>
      <img
        src={props.thumbnail}
        alt="thumbnail"
        className={styles.videoitem__thumbnail}
        onClick={handleClick}
      />
      <div className={styles.videoitem__details}>
        <h4 onClick={handleClick}>{props.description}</h4>
        <p>{props.details}</p>
      </div>
    </div>
  );
};

export default VideoItem;
