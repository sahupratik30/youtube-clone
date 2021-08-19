import {
  ExpandMore,
  Explore,
  History,
  Home,
  OndemandVideo,
  Subscriptions,
  VideoLibrary,
  WatchLater,
  Whatshot,
} from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./SideBar.module.css";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <ul className={styles.sidebar}>
      <div className={styles.sidebar__buttons}>
        <SideBarItem
          Icon={<Home />}
          name="Home"
          className={`${styles.sidebar__btn} ${styles["sidebar__btn--active"]}`}
          onClick={handleClick}
        />
        <SideBarItem
          Icon={<Explore />}
          name="Explore"
          className={styles.sidebar__btn}
        />
        <SideBarItem
          Icon={<Subscriptions />}
          name="Subscriptions"
          className={styles.sidebar__btn}
        />
      </div>
      <div className={styles.sidebar__buttons}>
        <SideBarItem
          Icon={<VideoLibrary />}
          name="Library"
          className={styles.sidebar__btn}
        />
        <SideBarItem
          Icon={<Whatshot />}
          name="Trending"
          className={styles.sidebar__btn}
        />
        <SideBarItem
          Icon={<History />}
          name="History"
          className={styles.sidebar__btn}
        />
        <SideBarItem
          Icon={<OndemandVideo />}
          name="Your Videos"
          className={styles.sidebar__btn}
        />
        <SideBarItem
          Icon={<WatchLater />}
          name="Watch Later"
          className={styles.sidebar__btn}
        />
        <SideBarItem
          Icon={<ExpandMore />}
          name="Show More"
          className={styles.sidebar__btn}
        />
      </div>
    </ul>
  );
};

export default SideBar;
