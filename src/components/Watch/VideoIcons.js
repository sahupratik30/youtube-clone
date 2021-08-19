import {
  MoreHoriz,
  PlaylistAdd,
  Reply,
  ThumbDownAlt,
  ThumbUpAlt,
} from "@material-ui/icons";
import React from "react";
import styles from "./VideoIcons.module.css";
const VideoIcons = () => {
  return (
    <div className={styles.videoicons}>
      <div className={styles["videoicons__like--dislikes"]}>
        <div className={styles["videoicons__like--dislikes--wrap"]}>
          <div className={styles.videoicons__like}>
            <ThumbUpAlt className={styles.videoicons__icon} />
            <p>60</p>
          </div>
          <div className={styles.videoicons__dislike}>
            <ThumbDownAlt className={styles.videoicons__icon} />
            <p>4</p>
          </div>
        </div>
        <div className={styles["like__dislike--border"]} />
      </div>
      <div className={styles["videoicons__icon--container"]}>
        <Reply
          className={`${styles.videoicons__icon} ${styles["videoicons__icon--share"]}`}
        />
        <p>SHARE</p>
      </div>
      <div className={styles["videoicons__icon--container"]}>
        <PlaylistAdd
          className={`${styles.videoicons__icon} ${styles["videoicons__icon--share"]}`}
        />
        <p>SAVE</p>
      </div>
      <div className={styles["videoicons__icon--container"]}>
        <MoreHoriz
          className={`${styles.videoicons__icon} ${styles["videoicons__icon--share"]}`}
        />
      </div>
    </div>
  );
};

export default VideoIcons;
