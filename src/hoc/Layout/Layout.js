import React, { Fragment, Component } from "react";
import { connect } from "react-redux";

import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar.js";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer.js";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerOpenHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Fragment>
        <Toolbar
          isAuth={this.props.isAutheticated}
          drawerToggleClicked={this.sideDrawerOpenHandler}
        ></Toolbar>
        <SideDrawer
          isAuth={this.props.isAutheticated}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        ></SideDrawer>
        <main className='Layout__content'>{this.props.children}</main>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAutheticated: state.authReducer.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
