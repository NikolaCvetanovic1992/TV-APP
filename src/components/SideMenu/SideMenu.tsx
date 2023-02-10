import classes from "./SideMenu.module.css";
import { useState } from "react";

const SideMenu = () => {
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <div
      className={
        !sideMenu
          ? classes.container
          : `${classes.container} ${classes.containerClosed}`
      }
    >
      <button
        onClick={() => {
          setSideMenu((prev) => !prev);
        }}
        className={classes.openButton}
      >
        {!sideMenu ? "Open Menu" : "Close Menu"}
      </button>
    </div>
  );
};

export default SideMenu;
