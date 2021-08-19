import React from "react";
import styles from "./Header.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import logo from "../../assets/YouTube-Logo.wine.svg";
import { Button } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
const Header = (props) => {
  const history = useHistory();
  const handleLogoClick = () => {
    history.push("/");
  };
  return (
    <React.Fragment>
      <div className={styles.header}>
        <div className={styles.header__left}>
          <MenuIcon className={styles.menuicon} onClick={props.onMenuClick} />
          <img src={logo} alt="logo" onClick={handleLogoClick} />
        </div>
        <form className={styles.header__center}>
          <input
            type="text"
            placeholder="Search"
            className={styles.header__input}
          />
          <Button className={styles.header__btn}>
            <Search className={styles.header__searchicon} />
          </Button>
        </form>
        <div className={styles.header__right}>
          <VideoCallIcon />
          <AppsIcon />
          <NotificationsIcon />
          <Avatar
            src="https://lh3.googleusercontent.com/a/AATXAJzUbJ3HrEku0B1FA7BOz2iLI_klW8Lap9W66H5g4w=s360-p-rw-no-mo"
            className={styles.header__avatar}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
