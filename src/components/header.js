import React, { Component } from "react"
import LogoImg from "../assets/logo.png"
import Link from 'gatsby-link'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }
  handleClick = () => {
    this.setState({ active: !this.state.active });
   };
render() {

 return (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img
          src={LogoImg}
          className="logo"
          alt=""
        />
      </a>

      <span
        role="button"
        className={
          "navbar-burger burger " + (this.state.active ? "is-active" : "")
        }
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        onClick={this.handleClick}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </span>
    </div>
    <div
      id="navbarBasicExample"
      className={"navbar-menu " + (this.state.active ? "is-active" : "")}
    >
      <div className="navbar-start">
        <a className="navbar-item">Home</a>

        <a className="navbar-item">Documentation</a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a className="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
    );
  }
}

export default Navbar;