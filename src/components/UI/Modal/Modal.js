import React, { Fragment, Component } from "react";
import Backdrop from "../Backdrop/Backdrop.js";
import "./Modal.css";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentDidUpdate() {
    // console.log("[Modal] DidUpdate");
  }

  render() {
    return (
      <Fragment>
        <Backdrop
          show={this.props.show}
          clicked={this.props.modalClosed}
        ></Backdrop>
        <div
          className='Modal'
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Modal;
