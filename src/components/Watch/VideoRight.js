import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./VideoRight.module.css";
const VideoRight = (props) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/watch");
  };
  return (
    <div className={styles.videoright}>
      <img
        src={props.thumbnail}
        alt="thumbnail"
        className={styles.videoright__thumbnail}
        onClick={handleClick}
      />
      <div className={styles.videoright__details}>
        <p className={styles.videoright__description} onClick={handleClick}>
          {props.description}
        </p>
        <h5 onClick={handleClick}>{props.channel}</h5>
        <h5>{props.details}</h5>
      </div>
    </div>
  );
};

export default VideoRight;
