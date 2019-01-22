import React, { Component } from 'react';
import './HomeComponent.css';
import logo from '../../img/logo.png';

class HomeComponent extends Component {
  render() {
    return (
      <div className="HomeComponent">
        <div className="container-fluid home-page-bg main-content">
          <div className="container">
            <div className="row">
              <img className="rounded mx-auto d-block" src={logo} alt="YWMobile Logo" />
            </div>
            <div className="row mx-auto">
              <h1 className="text-center mx-auto text-color slogan">
                <ul className="texts">
                  <li>We are ABCD by sincerity</li>
                </ul>
              </h1>
              <h1 className="text-center mx-auto text-color slogan-two" style={{display:'none'}}>
                <ul className="texts">
                  <li>“ Aha Best Car Driver with Star “</li>
                </ul>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
