import { Explore, Home, Subscriptions, VideoLibrary } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./SideBarSmall.module.css";
const SideBarSmall = () => {
  const history = useHistory();
  const clickHandler = () => {
    history.push("/");
  };
  return (
    <div className={styles.sidebarsmall}>
      <div
        className={styles["sidebarsmall__item--active"]}
        onClick={clickHandler}
      >
        <Home className={styles.sidebarsmall__icon} />
        <p>Home</p>
      </div>
      <div className={styles.sidebarsmall__item}>
        <Explore className={styles.sidebarsmall__icon} />
        <p>Explore</p>
      </div>
      <div className={styles.sidebarsmall__item}>
        <Subscriptions className={styles.sidebarsmall__icon} />
        <p>Subscriptions</p>
      </div>
      <div className={styles.sidebarsmall__item}>
        <VideoLibrary className={styles.sidebarsmall__icon} />
        <p>Library</p>
      </div>
    </div>
  );
};

export default SideBarSmall;
