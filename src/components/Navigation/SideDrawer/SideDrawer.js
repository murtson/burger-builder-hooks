import React, { Fragment } from "react";

import Logo from "../../Logo/Logo.js";
import NavigationItems from "../NavigationItems/NavigationItems.js";
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop.js";

const sideDrawer = (props) => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed}></Backdrop>
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div className='Logo_wrapper--SideDrawer'>
          <Logo></Logo>
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth}></NavigationItems>
        </nav>
      </div>
    </Fragment>
  );
};

export default sideDrawer;
