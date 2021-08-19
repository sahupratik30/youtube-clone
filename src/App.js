import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import VideoGrid from "./components/Videos/VideoGrid";
import Watch from "./components/Watch/Watch";
import Channel from "./components/Channel/Channel";
import SideBarSmall from "./components/SideBar/SideBarSmall";
function App() {
  const [menuIsActive, setMenuIsActive] = useState(true);
  const handleMenuClick = () => {
    setMenuIsActive((prevState) => {
      return !prevState;
    });
  };
  return (
    <Router>
      <Switch>
        <div className="app">
          <Route exact path="/">
            <Header onMenuClick={handleMenuClick} />
            <div className="app__main">
              {menuIsActive ? <SideBar /> : <SideBarSmall />}
              <VideoGrid />
            </div>
          </Route>
          <Route exact path="/watch">
            <Header />
            <Watch />
          </Route>
          <Route exact path="/channel">
            <Header onMenuClick={handleMenuClick} />
            <div className="app__main">
              {menuIsActive ? <SideBar /> : <SideBarSmall />}
              <Channel />
            </div>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}
export default App;
