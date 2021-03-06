import React, { Component } from "react"
import LogoImg from "../assets/logo.png"

class Footer extends Component {

render() {

 return (
  <footer>
      <div className="container">
          <div className="columns">
              <div className="column">
                <img src={LogoImg} alt=""/>
              </div>
          </div>
      </div>

      <hr/>

      <div className="container">
          <div className="columns">
              <div className="column">
                <p>
                    Disease.io Copyright &copy; 2020. 
                    All rights reserved. 
                    This site is designed for medical professionals only.
                </p>
              </div>
          </div>
      </div>
  </footer>
    );
  }
}

export default Footer;