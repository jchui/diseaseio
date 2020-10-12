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
      <a className="navbar-item logo" href="../">
        <img
          src={LogoImg}
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
        <Link className="navbar-item" to="/">Home</Link>
        <Link className="navbar-item" to="../about">About Us</Link>
        <Link className="navbar-item" to="../disclaimer">Disclaimer</Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link className="button is-primary" to="../about">
              <strong>Get Involved</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
    );
  }
}

export default Navbar;