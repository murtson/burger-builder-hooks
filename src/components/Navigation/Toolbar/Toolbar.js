import React from "react";
import Logo from "../../Logo/Logo.js";
import NavigationItems from "../NavigationItems/NavigationItems.js";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle.js";

import "./Toolbar.css";

const toolbar = (props) => {
  return (
    <header className='Toolbar'>
      <DrawerToggle clicked={props.drawerToggleClicked}></DrawerToggle>
      <div className='Logo_wrapper--Toolbar'>
        <Logo></Logo>
      </div>
      <nav className='DesktopOnly'>
        <NavigationItems isAuthenticated={props.isAuth}></NavigationItems>
      </nav>
    </header>
  );
};

export default toolbar;
