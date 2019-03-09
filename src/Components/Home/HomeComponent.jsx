import React, { Component } from 'react';
import './HomeComponent.css';
import logo from '../../img/logo.png';
import $ from 'jquery';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props);
    $('.slogan').textillate({
      loop: false,
      in: {
        effect: 'fadeInLeftBig',
        delayScale: 1.5,
        delay: 50
      },
      callback: function () {
        $('.slogan-two').css('display', 'block');
        $('.slogan-two').textillate({
          loop: false,
          in: {
            effect: 'fadeInLeftBig',
            delayScale: 1.5,
            delay: 50,
          }
        });
      }
    });
  }
  
  render() {
    return (
      <div className="HomeComponent">
        <div className="container-fluid home-page-bg">
          <div className="d-flex flex-column main-content">
            <div className="d-flex">
              <img className="rounded mx-auto d-block" src={logo} alt="YWMobile Logo" />
            </div>
            <div className="d-flex flex-column justify-content-center">
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
